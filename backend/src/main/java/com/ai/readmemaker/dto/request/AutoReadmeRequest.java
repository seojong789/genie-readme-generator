package com.ai.readmemaker.dto.request;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AutoReadmeRequest {
    private Long id;
    private String gitHubUrl;
    private String title;
    private String description;
    private String techStack;

}
