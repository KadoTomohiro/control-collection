import {Component, input} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-control-status',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './control-status.component.html',
  styleUrl: './control-status.component.css'
})
export class ControlStatusComponent {
  control = input.required<AbstractControl>();
}
