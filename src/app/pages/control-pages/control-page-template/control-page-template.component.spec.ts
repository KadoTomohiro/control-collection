import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPageTemplateComponent } from './control-page-template.component';

describe('ControlPageTemplateComponent', () => {
  let component: ControlPageTemplateComponent;
  let fixture: ComponentFixture<ControlPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPageTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
