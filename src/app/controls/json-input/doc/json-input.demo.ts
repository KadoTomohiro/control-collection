import {CONTROL_DOCUMENT_PROPERTIES} from "@domain/control-document/control-demo.service";
import {ControlDemoProperty} from "@domain/control-document/component-info";
import {Component} from "@angular/core";
import {JsonInputComponent} from "@controls/json-input/json-input.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-json-input-demo',
  template: `
    <app-control-field>
      <app-json-input [formControl]="control"></app-json-input>
    </app-control-field>
    {{control.value | json}}
  `,
  standalone: true,
  imports: [
    JsonInputComponent,
    ReactiveFormsModule,
    ControlFieldComponent,
    JsonPipe
  ]
})
export class jsonInputDemoComponent {
  control = new FormControl<Object>({'foo': 'bar',})
}

const jsonInputDemoProp: ControlDemoProperty = {
  jsonInput: [
    {
      title: 'デモ',
      component: jsonInputDemoComponent
    }
  ]
}

export const jsonInputDocProvide = {provide: CONTROL_DOCUMENT_PROPERTIES, useValue: jsonInputDemoProp, multi: true}
