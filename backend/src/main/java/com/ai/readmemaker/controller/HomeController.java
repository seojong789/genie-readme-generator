package com.ai.readmemaker.controller;

import com.ai.readmemaker.user.CustomUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {



    @GetMapping("/index")
    public String index(Model model, Authentication authentication) {
        // authentication 객체가 null인지 확인
        if (authentication != null && authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof CustomUserDetails) {
                CustomUserDetails customUserDetails = (CustomUserDetails) principal;
                model.addAttribute("nickname", customUserDetails.getName());
            } else {
                model.addAttribute("nickname", "Unknown");
            }
        } else {
            model.addAttribute("nickname", "Guest");
        }
        return "index";
    }
}
