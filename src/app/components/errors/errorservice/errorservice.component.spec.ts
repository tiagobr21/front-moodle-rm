import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorserviceComponent } from './errorservice.component';

describe('ErrorserviceComponent', () => {
  let component: ErrorserviceComponent;
  let fixture: ComponentFixture<ErrorserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
