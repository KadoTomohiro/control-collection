import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListNavComponent } from './article-list-nav.component';

describe('ArticleListNavComponent', () => {
  let component: ArticleListNavComponent;
  let fixture: ComponentFixture<ArticleListNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleListNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleListNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
