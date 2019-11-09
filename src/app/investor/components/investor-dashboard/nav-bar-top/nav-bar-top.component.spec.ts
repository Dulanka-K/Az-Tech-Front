import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTopComponent } from './nav-bar-top.component';

describe('NavBarTopComponent', () => {
  let component: NavBarTopComponent;
  let fixture: ComponentFixture<NavBarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
