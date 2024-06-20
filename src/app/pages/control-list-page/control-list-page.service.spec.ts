import { TestBed } from '@angular/core/testing';

import { ControlListPageService } from './control-list-page.service';

describe('ControlListPageService', () => {
  let service: ControlListPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlListPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
