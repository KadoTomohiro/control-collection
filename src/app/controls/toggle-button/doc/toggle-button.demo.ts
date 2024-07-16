import {CONTROL_DOCUMENT_PROPERTIES} from "@domain/control-document/control-demo.service";
import {ControlDemoProperty} from "@domain/control-document/component-info";
import {Component} from "@angular/core";
import {ToggleButtonComponent} from "@controls/toggle-button/toggle-button.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";
import {Options} from "@models/options/options";

@Component({
  selector: 'app-toggle-button-demo',
  template: `
    <app-control-field>
      <app-toggle-button [list]="options" [formControl]="control"></app-toggle-button>
    </app-control-field>
  `,
  standalone: true,
  imports: [
    ToggleButtonComponent,
    ReactiveFormsModule,
    ControlFieldComponent,
  ]
})
export class toggleButtonDemoComponent {
  options: Options<number> = [
    {
      label: 'option1',
      value: 1,
    },
    {
      label: 'option2',
      value: 2,
    },

  ]
  control = new FormControl<Object>(1)
}

const toggleButtonDemoProp: ControlDemoProperty = {
  toggleButton: [
    {
      title: 'デモ',
      component: toggleButtonDemoComponent
    }
  ]
}

export const toggleButtonDocProvide = {provide: CONTROL_DOCUMENT_PROPERTIES, useValue: toggleButtonDemoProp, multi: true}
