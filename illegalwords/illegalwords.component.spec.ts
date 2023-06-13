import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllegalwordsComponent } from './illegalwords.component';

describe('IllegalwordsComponent', () => {
  let component: IllegalwordsComponent;
  let fixture: ComponentFixture<IllegalwordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllegalwordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllegalwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
