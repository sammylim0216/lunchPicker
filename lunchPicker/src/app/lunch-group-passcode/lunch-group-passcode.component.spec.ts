import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchGroupPasscodeComponent } from './lunch-group-passcode.component';

describe('LunchGroupPasscodeComponent', () => {
  let component: LunchGroupPasscodeComponent;
  let fixture: ComponentFixture<LunchGroupPasscodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchGroupPasscodeComponent]
    });
    fixture = TestBed.createComponent(LunchGroupPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
