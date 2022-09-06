import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMgtComponent } from './forum-mgt.component';

describe('ForumMgtComponent', () => {
  let component: ForumMgtComponent;
  let fixture: ComponentFixture<ForumMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
