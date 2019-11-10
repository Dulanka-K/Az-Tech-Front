import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostedIdeasComponent } from './boosted-ideas.component';

describe('BoostedIdeasComponent', () => {
  let component: BoostedIdeasComponent;
  let fixture: ComponentFixture<BoostedIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostedIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostedIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
