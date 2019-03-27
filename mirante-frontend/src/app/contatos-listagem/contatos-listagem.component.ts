import { Component, OnInit } from '@angular/core';

import { ContatosService } from './contatos.service';
import { ContatoEntity } from '../entity/contato';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: ContatoEntity[];

  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.contatosService.listar().subscribe(dados => this.contatos = dados);
  }
}
