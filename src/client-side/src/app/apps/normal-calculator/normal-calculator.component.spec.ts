import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCalculatorComponent } from './normal-calculator.component';

describe('NormalCalculatorComponent', () => {
  let component: NormalCalculatorComponent;
  let fixture: ComponentFixture<NormalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
