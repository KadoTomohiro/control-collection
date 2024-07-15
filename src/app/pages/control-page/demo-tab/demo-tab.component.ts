import {Component, inject} from '@angular/core';
import {NgComponentOutlet} from "@angular/common";
import {ControlPageService} from "@pages/control-page/control-page.service";

@Component({
  selector: 'app-demo-tab',
  standalone: true,
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './demo-tab.component.html',
  styleUrl: './demo-tab.component.css'
})
export class DemoTabComponent {
  #service: ControlPageService

  get currentControlDemoList() {
    return this.#service.currentControlDemoList
  }

  constructor() {
    this.#service = inject(ControlPageService)
  }
}
