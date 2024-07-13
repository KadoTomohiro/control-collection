import {Component, input} from "@angular/core";
import {CounterComponent} from "@controls/counter/counter.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-counter-doc',
  template: `
<!--    @let fc = formControl()-->
    @if(formControl) {
      <app-counter [formControl]="formControl()" [min]="min()" [max]="max()"></app-counter>
    }
  `,
  imports: [CounterComponent, ReactiveFormsModule],
  standalone: true
})
export class CounterWrapperComponent extends CounterComponent{
  formControl = input<FormControl>()
  formControlName = input<string>();
}
