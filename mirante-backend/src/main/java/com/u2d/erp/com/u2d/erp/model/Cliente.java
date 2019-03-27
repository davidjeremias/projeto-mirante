package com.u2d.erp.com.u2d.erp.model;

import lombok.Data;

import java.util.List;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cpf;
    private String nome;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name= "cliente_id")
    private List<Telefone> telefones;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_id")
    private List<Email> emails;

}
