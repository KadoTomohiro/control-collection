import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonInputPageComponent } from './json-input-page.component';

describe('JsonInputPageComponent', () => {
  let component: JsonInputPageComponent;
  let fixture: ComponentFixture<JsonInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonInputPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
