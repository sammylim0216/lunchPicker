import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLunchGroupComponent } from './create-lunch-group.component';

describe('CreateLunchGroupComponent', () => {
  let component: CreateLunchGroupComponent;
  let fixture: ComponentFixture<CreateLunchGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLunchGroupComponent]
    });
    fixture = TestBed.createComponent(CreateLunchGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
