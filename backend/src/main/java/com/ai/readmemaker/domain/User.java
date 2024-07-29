package com.ai.readmemaker.domain;

import com.ai.readmemaker.dto.UserForm;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.time.LocalDateTime;
import java.util.Collection;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = true)
    private String profileImageUrl;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true)
    private AuthProvider authProvider;

    @Column(nullable = true)
    private String providerId; // 소셜 로그인의 경우 제공자의 고유 ID

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    // 일반 로그인
    public User(UserForm user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.name = user.getName();

        this.authProvider = user.getAuthProvider();
        this.providerId = user.getProviderId();

        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    // 소셜 로그인
    public User(String email, String name, String profileImageUrl, AuthProvider authProvider, String providerId){
        this.email = email;
        this.name = name;
        this.password = "";
        this.profileImageUrl = profileImageUrl;
        this.authProvider = authProvider;
        this.providerId = providerId;

        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}