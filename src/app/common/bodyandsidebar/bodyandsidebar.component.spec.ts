import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyandsidebarComponent } from './bodyandsidebar.component';

describe('BodyandsidebarComponent', () => {
  let component: BodyandsidebarComponent;
  let fixture: ComponentFixture<BodyandsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyandsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyandsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
