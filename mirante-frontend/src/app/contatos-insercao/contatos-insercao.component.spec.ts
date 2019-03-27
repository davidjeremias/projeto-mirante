import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosInsercaoComponent } from './contatos-insercao.component';

describe('ContatosInsercaoComponent', () => {
  let component: ContatosInsercaoComponent;
  let fixture: ComponentFixture<ContatosInsercaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosInsercaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosInsercaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
