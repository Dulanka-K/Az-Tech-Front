import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllideasComponent } from './allideas.component';

describe('AllideasComponent', () => {
  let component: AllideasComponent;
  let fixture: ComponentFixture<AllideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
