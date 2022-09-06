import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesComponent } from './coaches.component';

describe('CoachesComponent', () => {
  let component: CoachesComponent;
  let fixture: ComponentFixture<CoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
