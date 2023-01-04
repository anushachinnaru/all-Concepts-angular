import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharereplay2Component } from './sharereplay2.component';

describe('Sharereplay2Component', () => {
  let component: Sharereplay2Component;
  let fixture: ComponentFixture<Sharereplay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharereplay2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sharereplay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
