import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIdeasComponent } from './my-ideas.component';

describe('MyIdeasComponent', () => {
  let component: MyIdeasComponent;
  let fixture: ComponentFixture<MyIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
