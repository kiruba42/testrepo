import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchmodeComponent } from './batchmode.component';

describe('BatchmodeComponent', () => {
  let component: BatchmodeComponent;
  let fixture: ComponentFixture<BatchmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchmodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
