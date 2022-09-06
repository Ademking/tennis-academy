import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBookingComponent } from './courses-booking.component';

describe('CoursesBookingComponent', () => {
  let component: CoursesBookingComponent;
  let fixture: ComponentFixture<CoursesBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
