import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetterComponent } from './input-setter.component';

describe('InputSetterComponent', () => {
  let component: InputSetterComponent;
  let fixture: ComponentFixture<InputSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
