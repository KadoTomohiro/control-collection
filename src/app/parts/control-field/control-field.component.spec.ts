import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFieldComponent } from './control-field.component';

describe('ControlFieldComponent', () => {
  let component: ControlFieldComponent;
  let fixture: ComponentFixture<ControlFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
