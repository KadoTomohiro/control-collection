import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTabComponent } from './demo-tab.component';

describe('DemoTabComponent', () => {
  let component: DemoTabComponent;
  let fixture: ComponentFixture<DemoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
