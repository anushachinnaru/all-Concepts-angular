import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushChangeetectionComponent } from './onpush-changeetection.component';

describe('OnpushChangeetectionComponent', () => {
  let component: OnpushChangeetectionComponent;
  let fixture: ComponentFixture<OnpushChangeetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushChangeetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushChangeetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
