package com.ai.readmemaker.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class GeminiService {
    private static final String API_KEY = "AIzaSyAz4g_lfYxQbYTJCPtx4emYynBWkDphkbg";
    private static final String API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();


    public String generateText(String prompt) throws IOException {
        String jsonBody = String.format(
                "{\"contents\":[{\"parts\":[{\"text\":\"%s\"}]}]}", prompt);

        Request request = new Request.Builder()
                .url(API_URL + "?key=" + API_KEY)
                .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
                .build();

        try (Response response = client.newCall(request).execute()) {
            // 응답 처리 로직
            String responseBody = response.body().string();
            JsonNode rootNode = objectMapper.readTree(responseBody);

            // 원하는 텍스트 부분 추출
            String extractedText = rootNode
                    .path("candidates")
                    .path(0)
                    .path("content")
                    .path("parts")
                    .path(0)
                    .path("text")
                    .asText();

            return extractedText;
        }
    }
}