import {Component, inject} from '@angular/core';
import {ControlsService, DynamicControlInformation} from "@domain/controls/controls.service";
import {ActivatedRoute} from "@angular/router";
import {NgComponentOutlet} from "@angular/common";
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

// コントロール毎にページ作るのが面倒で動的なページを作ろうとした残骸。

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    NgComponentOutlet,
    ControlPageTemplateComponent,
    DecimalInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
  #service: ControlsService
  #router: ActivatedRoute
  controlName: string = '';
  controlInfo?: DynamicControlInformation;
  constructor() {
    this.#service = inject(ControlsService)
    this.#router = inject(ActivatedRoute)

    this.#router.params.subscribe(params => {
      console.log('params', params);
      const controlName = params['control']
      const controlInfo = this.#service.getControl(controlName)
      console.log(controlInfo)
      this.controlInfo = controlInfo
    })
  }

  constrol = new FormControl('')
}
