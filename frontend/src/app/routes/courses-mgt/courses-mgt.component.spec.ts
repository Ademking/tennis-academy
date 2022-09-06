import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMgtComponent } from './courses-mgt.component';

describe('CoursesMgtComponent', () => {
  let component: CoursesMgtComponent;
  let fixture: ComponentFixture<CoursesMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
