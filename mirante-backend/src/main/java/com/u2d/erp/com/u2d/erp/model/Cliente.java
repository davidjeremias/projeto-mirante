package com.u2d.erp.com.u2d.erp.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cpf;
    private String nome;
    @OneToOne
    private Endereco endereco;
    @OneToMany
    private List<Telefone> telefones;
    @OneToMany
    private List<Email> emails;



}
