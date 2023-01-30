import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlunoDigitalComponent } from './consultar-aluno-digital.component';

describe('ConsultarAlunoDigitalComponent', () => {
  let component: ConsultarAlunoDigitalComponent;
  let fixture: ComponentFixture<ConsultarAlunoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAlunoDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAlunoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
