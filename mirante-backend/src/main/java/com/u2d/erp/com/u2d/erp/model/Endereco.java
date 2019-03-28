package com.u2d.erp.com.u2d.erp.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name = "endereco")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    private String cep;
    
    @NotNull
    private String logradouro;
    
    @NotNull
    private String bairro;
    
    @NotNull
    private String cidade;
    
    @NotNull
    private String uf;
    
    private String complemento;
}
