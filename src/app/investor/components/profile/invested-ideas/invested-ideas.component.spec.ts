import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestedIdeasComponent } from './invested-ideas.component';

describe('InvestedIdeasComponent', () => {
  let component: InvestedIdeasComponent;
  let fixture: ComponentFixture<InvestedIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestedIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestedIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
