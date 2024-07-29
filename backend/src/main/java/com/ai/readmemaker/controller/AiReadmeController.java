package com.ai.readmemaker.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/auto")
public class AiReadmeController {
    @GetMapping("/make")
    public String make() {
        return "auto/make";
    }
}
