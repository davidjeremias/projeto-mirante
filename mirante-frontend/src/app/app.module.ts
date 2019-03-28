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
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ClienteInsercaoComponent } from './cliente-insercao/cliente-insercao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ClienteInsercaoComponent
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
    MenubarModule,
    DropdownModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
