import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinCombinelatestComponent } from './forkjoin-combinelatest.component';

describe('ForkjoinCombinelatestComponent', () => {
  let component: ForkjoinCombinelatestComponent;
  let fixture: ComponentFixture<ForkjoinCombinelatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjoinCombinelatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkjoinCombinelatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
