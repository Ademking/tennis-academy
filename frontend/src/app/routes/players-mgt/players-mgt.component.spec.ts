import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersMgtComponent } from './players-mgt.component';

describe('PlayersMgtComponent', () => {
  let component: PlayersMgtComponent;
  let fixture: ComponentFixture<PlayersMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
