import { TestBed } from '@angular/core/testing';

import { ControlDemoService } from './control-demo.service';

describe('ControlDemoService', () => {
  let service: ControlDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
