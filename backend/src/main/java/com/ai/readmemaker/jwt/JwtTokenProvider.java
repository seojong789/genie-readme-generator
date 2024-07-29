package com.ai.readmemaker.jwt;

import com.ai.readmemaker.user.CustomUserDetails;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;
import java.util.logging.Logger;

@Component
public class JwtTokenProvider {

    private static final Logger logger = Logger.getLogger(JwtTokenProvider.class.getName());

    // GPT에서는 static 쓰지 말라는데 안쓰면 값이 계속 안들어감
    private static SecretKey key;

    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("${app.jwtExpirationInMs}")
    private int jwtExpirationInMs;

    public JwtTokenProvider() {
        logger.info("JwtTokenProvider 생성자 호출됨");
    }

    @PostConstruct
    public void init() {
        logger.info("init() 메서드 시작");
        logger.info("jwtSecret: " + jwtSecret);
        logger.info("jwtExpirationInMs: " + jwtExpirationInMs);

        try {
            if (jwtSecret == null || jwtSecret.trim().isEmpty()) {
                throw new IllegalArgumentException("JWT secret is not set.");
            }

            byte[] decodedKey = Base64.getDecoder().decode(jwtSecret);

            if (decodedKey.length < 32) {
                throw new IllegalArgumentException("The provided JWT secret key is too short. It must be at least 256 bits (32 bytes).");
            }

            this.key = Keys.hmacShaKeyFor(decodedKey);
            logger.info("JWT key 생성 완료");

        } catch (Exception e) {
            logger.severe("JWT 초기화 실패: " + e.getMessage());
            e.printStackTrace();
        }

        logger.info("init() 메서드 종료, key: " + (key != null ? "설정됨 :" + key : "null"));
    }


    public String generateToken(Authentication authentication) {
        CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();
        return generateTokenFromEmail(userPrincipal.getEmail());
    }

    public String generateTokenFromEmail(String email) {
        if (key == null) {
            logger.severe("JWT key is null. Initialization may have failed.");
            throw new IllegalStateException("JWT key has not been initialized.");
        }

        logger.info("Generating token for email: " + email);

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

        try {
            String token = Jwts.builder()
                    .setSubject(email)
                    .setIssuedAt(now)
                    .setExpiration(expiryDate)
                    .signWith(key, SignatureAlgorithm.HS512)
                    .compact();
            logger.info("Generated token: " + token);
            return token;
        } catch (Exception e) {
            logger.severe("Token generation failed: " + e.getMessage());
            throw new RuntimeException("Could not generate token", e);
        }
    }
}