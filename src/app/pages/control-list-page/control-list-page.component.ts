import {Component, inject, signal, Signal} from '@angular/core';
import {ControlListPageService, ControlPageList} from "@pages/control-list-page/control-list-page.service";
import {RouterModule} from "@angular/router";

// TODO: 最初は一覧ページのつもりだったからこの名前だがナビゲーションバーになったので名前が不適切
// ページの主構成要素だからここにいるのはいいけど名前は変えたい

@Component({
  selector: 'app-control-list-page',
  standalone: true,
  imports: [
    RouterModule
  ],
  providers: [
    ControlListPageService
  ],
  templateUrl: './control-list-page.component.html',
  styleUrl: './control-list-page.component.css'
})
export class ControlListPageComponent {
  list: Signal<ControlPageList>
  #service: ControlListPageService;
  constructor() {
    this.#service = inject(ControlListPageService);
    this.list = signal<ControlPageList>(this.#service.getPageList());
  }
}
