import {inject, Injectable} from '@angular/core';
import {ARTICLE_NAMES, ArticleName} from "../../../articles/provideArticleNames";
import {NavigationList} from "@pages/navigations/navigation";
import * as changeCase from "change-case";

@Injectable({
  providedIn: 'root'
})
export class ArticleListNavService {

  #articleNames: ArticleName[]

  constructor() {
    this.#articleNames = inject(ARTICLE_NAMES)
  }

  getPageList(): NavigationList {
    return this.#articleNames
      .map(articleName => {
        const { article, title } = articleName;
        return {path: article, label: title}
      })
      .filter(controlPage => !!controlPage.path)
  }
}
