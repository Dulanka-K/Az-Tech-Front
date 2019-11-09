import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInvestorComponent } from './login-investor.component';

describe('LoginInvestorComponent', () => {
  let component: LoginInvestorComponent;
  let fixture: ComponentFixture<LoginInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
