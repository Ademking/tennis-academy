import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesMgtComponent } from './coaches-mgt.component';

describe('CoachesMgtComponent', () => {
  let component: CoachesMgtComponent;
  let fixture: ComponentFixture<CoachesMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
