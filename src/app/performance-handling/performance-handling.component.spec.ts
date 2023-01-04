import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceHandlingComponent } from './performance-handling.component';

describe('PerformanceHandlingComponent', () => {
  let component: PerformanceHandlingComponent;
  let fixture: ComponentFixture<PerformanceHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceHandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
