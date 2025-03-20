import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";
import {ControlStatusComponent} from "@domain/control-status/control-status.component";
import {SelectorDirective} from "@controls/selector/selector.directive";

@Component({
  selector: 'app-top-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ControlFieldComponent,
    ControlStatusComponent,
    SelectorDirective
  ],
  templateUrl: './top-page.component.html',
  styleUrl: './top-page.component.css'
})
export class TopPageComponent {
  control = new FormControl();
}

