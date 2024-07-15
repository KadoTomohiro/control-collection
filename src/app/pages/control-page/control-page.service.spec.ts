import { TestBed } from '@angular/core/testing';

import { ControlPageService } from './control-page.service';

describe('ControlPageService', () => {
  let service: ControlPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
