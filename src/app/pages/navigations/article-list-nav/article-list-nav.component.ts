import {Component, signal} from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {NavigationList} from "@pages/navigations/navigation";
import {ArticleListNavService} from "@pages/navigations/article-list-nav/article-list-nav.service";

@Component({
  selector: 'app-article-list-nav',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './article-list-nav.component.html',
  styleUrl: '../navigation-list.css'
})
export class ArticleListNavComponent {
  navigationList = signal<NavigationList>([])
  service: ArticleListNavService;

  constructor() {
    this.service = new ArticleListNavService();
    this.navigationList.set(this.service.getPageList());
  }


}
