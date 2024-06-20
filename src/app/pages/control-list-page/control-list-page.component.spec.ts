import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlListPageComponent } from './control-list-page.component';

describe('ControlListPageComponent', () => {
  let component: ControlListPageComponent;
  let fixture: ComponentFixture<ControlListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
