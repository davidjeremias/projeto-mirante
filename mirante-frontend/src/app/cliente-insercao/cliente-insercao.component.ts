import { TipoTelefone } from './../entity/tipoTelefone';
import { Email } from '../entity/email';
import { Telefone } from '../entity/telefone';
import { Endereco } from '../entity/endereco';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

import { Cliente } from '../entity/cliente';

@Component({
  selector: 'app-cliente-insercao',
  templateUrl: './cliente-insercao.component.html',
  styleUrls: ['./cliente-insercao.component.css']
})
export class ClienteInsercaoComponent implements OnInit {
  
  cliente = new Cliente();
  endereco = new Endereco();
  telefone = new Telefone();
  email = new Email();

  tipoTelefone: TipoTelefone[];

  selectedTipoTelefone: string;

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tipoTelefone = [
     
      {id: 1, tipoTelefone: 'residencial'},
      {id: 2, tipoTelefone: 'comercial'},
      {id: 3, tipoTelefone: 'celular'}
    ];
   }

  ngOnInit() {
    this.criaFormulario();
  }

  criaFormulario(){
    this.formulario = this.fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required])],
      cep: ['', Validators.compose([Validators.required])],
      logradouro: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      uf: ['', Validators.compose([Validators.required])],
      complemento: [''],
      numero: ['', Validators.compose([Validators.required])],
      tipoTelefone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]

    });
  }

  salvar(){

  }

  clean(){
    this.formulario.reset();
  }

}
