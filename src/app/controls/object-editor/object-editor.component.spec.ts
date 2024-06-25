import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controls/objectEditor } from './controls/object-editor.component';

describe('Controls/objectEditorComponent', () => {
  let component: Controls/objectEditorComponent;
  let fixture: ComponentFixture<Controls/objectEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controls/objectEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Controls/objectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
