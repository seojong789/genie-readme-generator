package com.ai.readmemaker.controller;

import com.ai.readmemaker.Exception.UserRegistrationException;
import com.ai.readmemaker.domain.User;
import com.ai.readmemaker.dto.UserForm;
import com.ai.readmemaker.dto.response.ErrorResponse;
import com.ai.readmemaker.dto.response.LoginResponse;
import com.ai.readmemaker.service.UserRestService;
import com.ai.readmemaker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserRestController {

    private final UserRestService userRestService;
    private final UserService userService;

    @Value("${app.jwtExpirationInMs}")
    private int expireMs;

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody UserForm userForm) {
        // 로그인 처리 로직 (일반적으로 토큰 발급 등)
        LoginResponse loginResponse = userRestService.login(userForm.getEmail(), userForm.getPassword());
        return ResponseEntity.ok(loginResponse);
    }


    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Validated UserForm userForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<String> errors = bindingResult.getAllErrors().stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(new ErrorResponse("Validation failed", errors) {
            });
        }

        try {
            User savedUser = userRestService.save(userForm);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        } catch (UserRegistrationException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        }
    }

}