import {Component, input} from '@angular/core';
import {JsonPipe} from "@angular/common";
import { FormControl} from "@angular/forms";
import {LabelComponent} from "@parts/label/label.component";

@Component({
  selector: 'app-control-status',
  standalone: true,
  imports: [
    JsonPipe,
    LabelComponent
  ],
  templateUrl: './control-status.component.html',
  styleUrl: './control-status.component.css'
})
export class ControlStatusComponent {
  control = input.required< FormControl >();
}
