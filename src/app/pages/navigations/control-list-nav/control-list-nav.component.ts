import {Component, inject, signal, Signal} from '@angular/core';
import {ControlListNavService} from "@pages/navigations/control-list-nav/control-list-nav.service";
import {RouterModule} from "@angular/router";
import {NavigationList} from "@pages/navigations/navigation";

// TODO: 最初は一覧ページのつもりだったからこの名前だがナビゲーションバーになったので名前が不適切
// ページの主構成要素だからここにいるのはいいけど名前は変えたい

@Component({
  selector: 'app-control-list-nav',
  standalone: true,
  imports: [
    RouterModule
  ],
  providers: [
    ControlListNavService
  ],
  templateUrl: './control-list-nav.component.html',
  styleUrl: '../navigation-list.css'
})
export class ControlListNavComponent {
  list: Signal<NavigationList>
  #service: ControlListNavService;
  constructor() {
    this.#service = inject(ControlListNavService);
    this.list = signal<NavigationList>(this.#service.getPageList());
  }
}
