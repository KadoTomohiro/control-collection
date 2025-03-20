import { TestBed } from '@angular/core/testing';

import { ArticleListNavService } from './article-list-nav.service';

describe('ArticleListNavService', () => {
  let service: ArticleListNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleListNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
