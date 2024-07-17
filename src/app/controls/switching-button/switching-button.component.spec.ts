import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingButtonComponent } from './switching-button.component';

describe('SwitchingButtonComponent', () => {
  let component: SwitchingButtonComponent;
  let fixture: ComponentFixture<SwitchingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
