import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    ControlPageTemplateComponent,
  ],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.css'
})
export class InputPageComponent {
  control: FormControl = new FormControl<string>('');
}
