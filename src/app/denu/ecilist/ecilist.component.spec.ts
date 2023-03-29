import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcilistComponent } from './ecilist.component';

describe('EcilistComponent', () => {
  let component: EcilistComponent;
  let fixture: ComponentFixture<EcilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcilistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
