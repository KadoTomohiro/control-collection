import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ControlStatusComponent} from "@domain/control-status/control-status.component";
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";
import {LabelComponent} from "@parts/label/label.component";
import {Decimal} from "@models/decimal/decimal";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";

@Component({
  selector: 'app-top-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ControlStatusComponent,
    DecimalInputComponent,
    LabelComponent,
    ControlFieldComponent
  ],
  templateUrl: './top-page.component.html',
  styleUrl: './top-page.component.css'
})
export class TopPageComponent {
  form = new FormGroup({
    text: new FormControl(''),
    decimal: new FormControl(new Decimal({integer: 0, fraction: 0}))
  })

  get textControl(): FormControl {
    return this.form.controls.text
  }

  get decimalControl(): FormControl {
    return this.form.controls.decimal
  }

  onClick() {
    this.textControl.setValue('1', )
  }
}
