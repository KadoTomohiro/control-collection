import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlListNavComponent } from './control-list-nav.component';

describe('ControlListNavComponent', () => {
  let component: ControlListNavComponent;
  let fixture: ComponentFixture<ControlListNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlListNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlListNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
