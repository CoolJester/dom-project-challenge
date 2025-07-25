import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNewsComponent } from './space-news.component';

describe('SpaceNewsComponent', () => {
  let component: SpaceNewsComponent;
  let fixture: ComponentFixture<SpaceNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
