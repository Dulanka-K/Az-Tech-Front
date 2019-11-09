import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIdeaComponent } from './add-new-idea.component';

describe('AddNewIdeaComponent', () => {
  let component: AddNewIdeaComponent;
  let fixture: ComponentFixture<AddNewIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
