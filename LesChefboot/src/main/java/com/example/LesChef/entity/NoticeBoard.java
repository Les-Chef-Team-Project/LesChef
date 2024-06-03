package com.example.LesChef.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;
import java.util.Date;

@Entity
@Getter
@Setter
public class NoticeBoard {
    private Long noticeId;
    private User user;
    private String title;
    private Long noticeView;
    private String noticeContent;
    private Blob noticeImg;

}
