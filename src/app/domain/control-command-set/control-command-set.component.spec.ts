import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCommandSetComponent } from './control-command-set.component';

describe('ControlCommandSetComponent', () => {
  let component: ControlCommandSetComponent;
  let fixture: ComponentFixture<ControlCommandSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCommandSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCommandSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
