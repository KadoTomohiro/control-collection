import {Component, computed, inject, signal} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articles-page',
  standalone: true,
  imports: [
    MarkdownComponent
  ],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent {
  articleName = signal('')
  articleSourcePath = computed(() => `./articles/${this.articleName()}.md`)
  route: ActivatedRoute

  constructor() {
    this.route = inject(ActivatedRoute)
    this.route.params.subscribe(params => {
      this.articleName.set(params['article'])
    })
  }
}
