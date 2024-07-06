import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";
import {JsonInputComponent} from "@controls/json-input/json-input.component";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";

@Component({
  selector: 'app-json-input-page',
  standalone: true,
  imports: [
    ControlPageTemplateComponent,
    JsonInputComponent,
    ReactiveFormsModule,
    ControlFieldComponent
  ],
  templateUrl: './json-input-page.component.html',
  styleUrl: './json-input-page.component.css'
})
export class JsonInputPageComponent {
  control = new FormControl({foo: 'bar'});
}
