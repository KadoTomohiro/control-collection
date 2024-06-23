import {Component} from '@angular/core';
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CounterComponent} from "@controls/counter/counter.component";
import {DataListComponent} from "@parts/data-list/data-list.component";
import {ControlCommandSetComponent} from "@domain/control-command-set/control-command-set.component";
import {InputSetterComponent} from "@domain/input-setter/input-setter.component";

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [
    ControlPageTemplateComponent,
    CounterComponent,
    ReactiveFormsModule,
    DataListComponent,
    ControlCommandSetComponent,
    InputSetterComponent
  ],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  control = new FormControl<number>(0)

  // input properties
  // inputs: {[key: string]: WritableSignal<any>} = {
  //   min: signal(0),
  //   max: signal(10),
  //   increment: signal(1)
  // }

  // properties: ComponentInputProperties = {
  //   min: {type: "number", initial: this.inputs['min']()},
  //   max: {type: "number", initial: this.inputs['max']()},
  //   increment: {type: "number", initial: this.inputs['increment']()},
  // }
  //
  // onInputPropertyChange(props: any) {
  //   Object.keys(props).forEach(key => {
  //     this.inputs[key].set(props[key])
  //   })
  // }
}
