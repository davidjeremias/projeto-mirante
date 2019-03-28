import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Cadastrar', routerLink:'/cliente-insercao'},
      {label: 'Consultar',routerLink: '/get', icon: 'pi pi-fw pi-pencil'}
    ];
  }

}
