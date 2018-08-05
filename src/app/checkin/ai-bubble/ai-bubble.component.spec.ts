import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBubbleComponent } from './ai-bubble.component';

describe('AiBubbleComponent', () => {
  let component: AiBubbleComponent;
  let fixture: ComponentFixture<AiBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
