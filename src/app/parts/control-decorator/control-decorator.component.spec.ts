import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDecoratorComponent } from './control-decorator.component';

describe('ControlDecoratorComponent', () => {
  let component: ControlDecoratorComponent;
  let fixture: ComponentFixture<ControlDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
