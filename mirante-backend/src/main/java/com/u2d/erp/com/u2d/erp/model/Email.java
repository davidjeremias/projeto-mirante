package com.u2d.erp.com.u2d.erp.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "email")
public class Email {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
}
