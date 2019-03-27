import { MessageService } from 'primeng/api';
import { ContatosService } from './../contatos-listagem/contatos.service';
import { Component, OnInit } from '@angular/core';
import { ContatoEntity } from '../entity/contato';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contatos-insercao',
  templateUrl: './contatos-insercao.component.html',
  styleUrls: ['./contatos-insercao.component.css']
})
export class ContatosInsercaoComponent implements OnInit {

  pessoa = new ContatoEntity();
  p: ContatoEntity;
  contatos: ContatoEntity[];
  cols: any[];
  
  formulario: FormGroup;

  constructor(private contatosService: ContatosService, 
    private fb: FormBuilder, private msg: MessageService) { 

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' }
  ];
  }

  ngOnInit() {
    this.criaFormulario();
    this.listar();
  }

  criaFormulario(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    }); 
  }

  salvar(){
    this.contatosService.salvar(this.pessoa).subscribe(dados => this.p = dados);
    this.clean();
    this.listar();
    this.formulario.updateOn;
    this.addSingle();
    location.reload();
  }

  listar(){
    this.contatosService.listar().subscribe(dados => this.contatos = dados);
  }

  clean(){
    this.formulario.reset();
  }

  addSingle() {
    this.msg.add({severity:'success', summary:'Service Message', detail:'Registro salvo com sucesso!'});
}

}
