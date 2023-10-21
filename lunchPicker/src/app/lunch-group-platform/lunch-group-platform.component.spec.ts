import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchGroupPlatformComponent } from './lunch-group-platform.component';

describe('LunchGroupPlatformComponent', () => {
  let component: LunchGroupPlatformComponent;
  let fixture: ComponentFixture<LunchGroupPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchGroupPlatformComponent]
    });
    fixture = TestBed.createComponent(LunchGroupPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
