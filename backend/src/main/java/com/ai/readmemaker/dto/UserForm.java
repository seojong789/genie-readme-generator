package com.ai.readmemaker.dto;

import com.ai.readmemaker.domain.AuthProvider;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter
@ToString
@NoArgsConstructor
public class UserForm {
    private String email;
    private String password;
    private String confirmPassword;
    private String name;
    private String profileImageUrl;
    private AuthProvider authProvider;
    private String providerId;

    // 소셜 로그인
    public UserForm(String email, String name, String profileImageUrl, AuthProvider authProvider, String providerId) {
        this.email = email;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
        this.authProvider = authProvider;
        this.providerId = providerId;
    }
}
