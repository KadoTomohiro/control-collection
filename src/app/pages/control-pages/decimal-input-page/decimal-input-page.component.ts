import {Component} from '@angular/core';
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Decimal, DecimalFormat} from '@models/decimal/decimal';
import {ControlCommandSetComponent} from "@domain/control-command-set/control-command-set.component";
import {DataListComponent} from "@parts/data-list/data-list.component";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";

@Component({
  selector: 'app-decimal-input-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DecimalInputComponent,
    ControlPageTemplateComponent,
    ControlCommandSetComponent,
    DataListComponent,
    ControlFieldComponent
  ],
  templateUrl: './decimal-input-page.component.html',
  styleUrl: './decimal-input-page.component.css'
})
export class DecimalInputPageComponent {
  control = new FormControl<DecimalFormat>({integer: 0, fraction: 0})

  get value(): Decimal {
    return this.control.value as Decimal;
  }
}
