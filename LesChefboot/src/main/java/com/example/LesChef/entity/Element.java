package com.example.LesChef.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.User;

@Entity
@Getter
@Setter
public class Element {
    private Long elementId;
    private Recipe recipe;
    private String elementName;
    private String elementAmount;



}
