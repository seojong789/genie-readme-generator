package com.ai.readmemaker.controller;

import com.ai.readmemaker.dto.request.AutoReadmeRequest;
import com.ai.readmemaker.service.GeminiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auto")
public class AiReadmeRestController {

    private final GeminiService geminiService;

    @PostMapping("/make")
    public ResponseEntity<String> makeGemini(@RequestParam String gitHubUrl,
                                             @RequestParam String title,
                                             @RequestParam String description,
                                             @RequestParam String techStack) throws IOException {

        System.out.println("gitHubUrl = " + gitHubUrl);
        System.out.println("title = " + title);
        System.out.println("description = " + description);
        System.out.println("techStack = " + techStack);

        String prompt = "이 프로젝트의 github 주소는 : " +gitHubUrl + " 해당 프로젝트를 분석해줘"
                        + " 이 프로젝트의 타이틀은 : " + title
                        + " 이 프로젝트의 설명은 : " + description
                        + " 이 프로젝트에 사용된 기술스택은 : " + techStack
                        + "위의 정보들을 가지고 다른 설명 필요 없이 readme만 만들어줘 예쁘게";

        String result = geminiService.generateText(prompt);

        System.out.println("result = " + result);

        return ResponseEntity.ok().body(result);

    }


}
