import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckApplicationComponent } from './check-application.component';

describe('CheckApplicationComponent', () => {
  let component: CheckApplicationComponent;
  let fixture: ComponentFixture<CheckApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
