import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDashbordComponent } from './professional-dashbord.component';

describe('ProfessionalDashbordComponent', () => {
  let component: ProfessionalDashbordComponent;
  let fixture: ComponentFixture<ProfessionalDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
