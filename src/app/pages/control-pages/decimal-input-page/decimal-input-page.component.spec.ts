import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalInputPageComponent } from './decimal-input-page.component';

describe('DecimalInputPageComponent', () => {
  let component: DecimalInputPageComponent;
  let fixture: ComponentFixture<DecimalInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecimalInputPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimalInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
