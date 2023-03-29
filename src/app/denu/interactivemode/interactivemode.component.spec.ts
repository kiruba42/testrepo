import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivemodeComponent } from './interactivemode.component';

describe('InteractivemodeComponent', () => {
  let component: InteractivemodeComponent;
  let fixture: ComponentFixture<InteractivemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractivemodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractivemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
