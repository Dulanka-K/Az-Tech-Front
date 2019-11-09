import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfessionalComponent } from './register-professional.component';

describe('RegisterProfessionalComponent', () => {
  let component: RegisterProfessionalComponent;
  let fixture: ComponentFixture<RegisterProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
