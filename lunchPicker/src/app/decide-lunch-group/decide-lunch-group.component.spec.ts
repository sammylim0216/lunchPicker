import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideLunchGroupComponent } from './decide-lunch-group.component';

describe('DecideLunchGroupComponent', () => {
  let component: DecideLunchGroupComponent;
  let fixture: ComponentFixture<DecideLunchGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecideLunchGroupComponent]
    });
    fixture = TestBed.createComponent(DecideLunchGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
