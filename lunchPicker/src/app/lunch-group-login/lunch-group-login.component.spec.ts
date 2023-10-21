import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchGroupLoginComponent } from './lunch-group-login.component';

describe('LunchGroupLoginComponent', () => {
  let component: LunchGroupLoginComponent;
  let fixture: ComponentFixture<LunchGroupLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchGroupLoginComponent]
    });
    fixture = TestBed.createComponent(LunchGroupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
