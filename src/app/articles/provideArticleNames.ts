import {InjectionToken, Provider} from "@angular/core";
import {controlDemoPropertyProvider} from "@controls/provideControlDemo";

export const ARTICLE_NAMES = new InjectionToken<ArticleName[]>('ArticleNames');

export type ArticleName = {article: string, title: string}

const articleNames: ArticleName[] = [
  {article: 'introduction', title: 'はじめに'},
  {article: 'control-pattern', title: 'コントロールの類型'},
]

export function provideArticleNames(): Provider[] {
  return [{ provide: ARTICLE_NAMES, useValue: articleNames}]
}
