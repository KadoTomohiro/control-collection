import {Component, input} from "@angular/core";
import {CounterComponent} from "@controls/counter/counter.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ControlDemoProperty} from "@domain/control-document/component-info";
import {CONTROL_DOCUMENT_PROPERTIES} from "@domain/control-document/control-demo.service";
import {ControlFieldComponent} from "@parts/control-field/control-field.component";

@Component({
  selector: 'app-counter-doc',
  styles: ['fieldset {width: fit-content; padding: 0.5rem}'],
  template: `
    <app-control-field label="Counter">
      <app-counter [formControl]="control" [min]="min()" [max]="max()"></app-counter>
    </app-control-field>
  `,
  imports: [CounterComponent, ReactiveFormsModule, ControlFieldComponent],
  standalone: true
})
export class CounterDemo1Component extends CounterComponent{
  control = new FormControl<number>(0)
}


@Component({
  selector: 'app-counter-doc',
  styles: ['fieldset {width: fit-content; padding: 0.5rem}'],
  template: `
    <app-control-field label="Counter">
      <app-counter [formControl]="control" [min]="setting.value.min" [max]="setting.value.max"></app-counter>
    </app-control-field>

    <fieldset [formGroup]="setting">
      <legend>Settings</legend>
      <app-control-field label="min">
        <input type="number" formControlName="min">
      </app-control-field>
      <app-control-field label="max">
        <input type="number" formControlName="max">
      </app-control-field>
    </fieldset>
  `,
  imports: [CounterComponent, ReactiveFormsModule, ControlFieldComponent],
  standalone: true
})
export class CounterDemo2Component{
  control = new FormControl<number>(0)
  setting = new FormGroup({
    min: new FormControl(0, {nonNullable: true}),
    max: new FormControl(10, {nonNullable: true})
  })
}

const counterDemoProp: ControlDemoProperty = {
  counter: [
    {
      title: 'デモ',
      component: CounterDemo1Component,
    },
    {
      title: '入力範囲を制限する',
      component: CounterDemo2Component
    }
  ],
}

export const  counterDocProvider = {provide: CONTROL_DOCUMENT_PROPERTIES, useValue: counterDemoProp, multi: true}
