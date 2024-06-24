import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchPageComponent } from './toggle-switch-page.component';

describe('ToggleSwitchPageComponent', () => {
  let component: ToggleSwitchPageComponent;
  let fixture: ComponentFixture<ToggleSwitchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
