import {Component, computed, inject} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {ControlPageService} from "@pages/control-page/control-page.service";

@Component({
  selector: 'app-document-tab',
  standalone: true,
    imports: [
        MarkdownComponent
    ],
  templateUrl: './control-document.component.html',
  styleUrl: './control-document.component.css'
})
export class ControlDocumentComponent {
  #service: ControlPageService;
  get documentSourcePath() {
    return this.#service.documentSourcePath()
  }
  constructor() {
    this.#service = inject(ControlPageService)
  }
}
