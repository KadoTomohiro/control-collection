import {Component} from "@angular/core";
import {SwitchingButtonComponent} from "@controls/switching-button/switching-button.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ControlDemoProperty} from "@domain/control-document/component-info";
import {CONTROL_DOCUMENT_PROPERTIES} from "@domain/control-document/control-demo.service";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";
import {Options} from "@models/options/options";

@Component({
  selector: 'app-switching-button-demo',
  template: `
    <app-control-field label="SwitchingButton">
      <app-switching-button [formControl]="control" [list]="options"></app-switching-button>
    </app-control-field>
  `,
  imports: [SwitchingButtonComponent, ReactiveFormsModule, ControlFieldComponent],
  standalone: true
})
export class SwitchingButtonDemoComponent {
  control = new FormControl<any>(0)

  options: Options = [
    {label: '1', value: 1},
    {label: '2', value: 2}
  ]
}

const switchingButtonDemoProp: ControlDemoProperty = {
  switchingButton: [
    {
      title: 'デモ',
      component: SwitchingButtonDemoComponent,
    },
  ],
}

export const  switchingButtonDemoProvider = {provide: CONTROL_DOCUMENT_PROPERTIES, useValue: switchingButtonDemoProp, multi: true}
