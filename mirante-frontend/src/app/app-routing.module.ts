import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatosInsercaoComponent } from './contatos-insercao/contatos-insercao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'post', component: ContatosInsercaoComponent},
  {path: 'get', component: ContatosListagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
