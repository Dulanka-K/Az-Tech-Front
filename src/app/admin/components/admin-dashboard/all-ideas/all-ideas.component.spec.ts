import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIdeasComponent } from './all-ideas.component';

describe('AllIdeasComponent', () => {
  let component: AllIdeasComponent;
  let fixture: ComponentFixture<AllIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
