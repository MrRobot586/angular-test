import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSelectorComponent } from './house-selector.component';

describe('HouseSelectorComponent', () => {
  let component: HouseSelectorComponent;
  let fixture: ComponentFixture<HouseSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
