import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDocumentComponent } from './control-document.component';

describe('ControlDocumentComponent', () => {
  let component: ControlDocumentComponent;
  let fixture: ComponentFixture<ControlDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
