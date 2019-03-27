import { MessageService, MenuItem } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatosService } from './contatos-listagem/contatos.service';
import { ContatosInsercaoComponent } from './contatos-insercao/contatos-insercao.component';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    ContatosInsercaoComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    ToastModule,
    MenubarModule
    
  ],
  providers: [ContatosService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
