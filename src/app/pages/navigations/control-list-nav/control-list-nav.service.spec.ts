import { TestBed } from '@angular/core/testing';

import { ControlListNavService } from './control-list-nav.service';

describe('ControlListNavService', () => {
  let service: ControlListNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlListNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
