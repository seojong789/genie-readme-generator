package com.ai.readmemaker.dto.response;

import com.ai.readmemaker.domain.User;
import com.ai.readmemaker.dto.UserForm;
import com.ai.readmemaker.user.CustomUserDetails;
import lombok.Data;
import org.springframework.security.oauth2.core.user.OAuth2User;

@Data
public class LoginResponse {
    private String token;
    private Long userId;
    private String email;
    private String name;
    private int expireMs;

    // 일반 로그인 생성자
    public LoginResponse(String jwt, Long id, String email, String name, int expireMs) {
        this.token = jwt;
        this.userId = id;
        this.email = email;
        this.name = name;
        this.expireMs = expireMs;
    }

    // 소셜 로그인 생성자?
    public LoginResponse(String token, CustomUserDetails userDetails, int expireMs) {
        this.token = token;
        this.userId = userDetails.getId();
        this.email = userDetails.getEmail();
        this.name = userDetails.getName();
        this.expireMs = expireMs;

    }

    // 소셜 로그인 생성자?
    public LoginResponse(String token, User user, int expireMs) {
        this.token = token;
        this.userId = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.expireMs = expireMs;
    }

}