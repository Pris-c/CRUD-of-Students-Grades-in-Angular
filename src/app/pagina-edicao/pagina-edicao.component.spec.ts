import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEdicaoComponent } from './pagina-edicao.component';

describe('PaginaEdicaoComponent', () => {
  let component: PaginaEdicaoComponent;
  let fixture: ComponentFixture<PaginaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
