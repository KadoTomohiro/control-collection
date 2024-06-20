import { Component } from '@angular/core';
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";

@Component({
  selector: 'app-decimal-input-page',
  standalone: true,
  imports: [
    DecimalInputComponent
  ],
  templateUrl: './decimal-input-page.component.html',
  styleUrl: './decimal-input-page.component.css'
})
export class DecimalInputPageComponent {

}
