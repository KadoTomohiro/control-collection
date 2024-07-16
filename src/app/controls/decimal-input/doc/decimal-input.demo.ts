import {CONTROL_DOCUMENT_PROPERTIES} from "@domain/control-document/control-demo.service";
import {ControlDemoProperty} from "@domain/control-document/component-info";
import {Component} from "@angular/core";
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {DecimalFormat} from "@models/decimal/decimal";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";

@Component({
  selector: 'app-decimal-input-demo',
  template: `
    <app-control-field>
      <app-decimal-input [formControl]="control"></app-decimal-input>
    </app-control-field>
  `,
  standalone: true,
  imports: [
    DecimalInputComponent,
    ReactiveFormsModule,
    ControlFieldComponent
  ]
})
export class DecimalInputDemoComponent {
  control = new FormControl<DecimalFormat>({integer: 0, fraction: 0})
}

const decimalInputDemoProp: ControlDemoProperty = {
    decimalInput: [
      {
        title: 'デモ',
        component: DecimalInputDemoComponent
      }
    ]
}

export const decimalInputDocProvide = {provide: CONTROL_DOCUMENT_PROPERTIES, useValue: decimalInputDemoProp, multi: true}
