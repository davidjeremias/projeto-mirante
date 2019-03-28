package com.u2d.erp.com.u2d.erp.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "telefone")
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String numero;
    private String tipoTelefone;

}
