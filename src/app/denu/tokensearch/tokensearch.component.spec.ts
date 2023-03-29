import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensearchComponent } from './tokensearch.component';

describe('TokensearchComponent', () => {
  let component: TokensearchComponent;
  let fixture: ComponentFixture<TokensearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokensearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokensearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
