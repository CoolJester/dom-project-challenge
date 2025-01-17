import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAlertComponent } from './dynamic-alert.component';

describe('DynamicAlertComponent', () => {
  let component: DynamicAlertComponent;
  let fixture: ComponentFixture<DynamicAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
