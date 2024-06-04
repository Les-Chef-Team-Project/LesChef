package com.example.LesChef.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;
import java.sql.Date;

@Entity
@Getter
@Setter
public class NoticeComment {
    private Long noticeCommentId;
    private User user;
    private NoticeBoard noticeBoard;
    private String content;
    private String tag;
    private Date date;



}
