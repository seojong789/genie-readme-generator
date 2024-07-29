package com.ai.readmemaker.controller;

import com.ai.readmemaker.domain.AuthProvider;
import com.ai.readmemaker.domain.User;
import com.ai.readmemaker.dto.UserForm;
import com.ai.readmemaker.dto.response.LoginResponse;
import com.ai.readmemaker.jwt.JwtTokenProvider;
import com.ai.readmemaker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OAuth2LoginRestController {

    private final AuthenticationManager authenticationManager;
    private  final UserService userService;

    @Value("${app.jwtExpirationInMs}")
    private int expireMs;

    @GetMapping("/googleLoginSuccess")
    public ResponseEntity<LoginResponse> socialLoginSuccess(@AuthenticationPrincipal OAuth2User principal) {

        // OAuth2User에서 필요한 정보 추출
        String email = principal.getAttribute("email");
        String name = principal.getAttribute("name");
        String profileImageUrl = principal.getAttribute("picture");
        String providerId = principal.getAttribute("sub");

        User user = null;

        if (userService.userExists(email)) {
            user = userService.finByEmail(email);
        } else {
            user = new User(email, name, profileImageUrl, AuthProvider.GOOGLE, providerId);
        }


        JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
        String token = jwtTokenProvider.generateTokenFromEmail(email);


        LoginResponse loginResponse = new LoginResponse(token, user, expireMs);

        return ResponseEntity.ok(loginResponse);
    }
}