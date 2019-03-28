package com.u2d.erp.com.u2d.erp.model;

import lombok.Data;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    private String cpf;
    
    @NotNull
    @Size(min = 3, max = 100)
    private String nome;
    
    @NotNull
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;
    
    @NotEmpty
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name= "cliente_id")
    private List<Telefone> telefones;
    
    @NotEmpty
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_id")
    private List<Email> emails;

}
