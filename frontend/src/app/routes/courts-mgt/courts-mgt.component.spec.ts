import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsMgtComponent } from './courts-mgt.component';

describe('CourtsMgtComponent', () => {
  let component: CourtsMgtComponent;
  let fixture: ComponentFixture<CourtsMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtsMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtsMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
