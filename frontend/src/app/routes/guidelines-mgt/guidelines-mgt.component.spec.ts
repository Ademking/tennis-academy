import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesMgtComponent } from './guidelines-mgt.component';

describe('GuidelinesMgtComponent', () => {
  let component: GuidelinesMgtComponent;
  let fixture: ComponentFixture<GuidelinesMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidelinesMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelinesMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
