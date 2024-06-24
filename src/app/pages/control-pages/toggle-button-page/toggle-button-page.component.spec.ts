import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonPageComponent } from './toggle-button-page.component';

describe('ToggleButtonPageComponent', () => {
  let component: ToggleButtonPageComponent;
  let fixture: ComponentFixture<ToggleButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
