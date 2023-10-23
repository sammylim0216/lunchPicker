import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchGroupNotfoundComponent } from './lunch-group-notfound.component';

describe('LunchGroupNotfoundComponent', () => {
  let component: LunchGroupNotfoundComponent;
  let fixture: ComponentFixture<LunchGroupNotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchGroupNotfoundComponent]
    });
    fixture = TestBed.createComponent(LunchGroupNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
