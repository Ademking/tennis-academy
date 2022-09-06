import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsBookingComponent } from './courts-booking.component';

describe('CourtsBookingComponent', () => {
  let component: CourtsBookingComponent;
  let fixture: ComponentFixture<CourtsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtsBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
