import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokentextComponent } from './tokentext.component';

describe('TokentextComponent', () => {
  let component: TokentextComponent;
  let fixture: ComponentFixture<TokentextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokentextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokentextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
