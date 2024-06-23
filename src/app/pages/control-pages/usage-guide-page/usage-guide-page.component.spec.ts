import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageGuidePageComponent } from './usage-guide-page.component';

describe('UsageGuidePageComponent', () => {
  let component: UsageGuidePageComponent;
  let fixture: ComponentFixture<UsageGuidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageGuidePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageGuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
