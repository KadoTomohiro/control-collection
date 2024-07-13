import {Component, inject, OnDestroy, signal, Type} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Subscription} from "rxjs";
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";
import {JsonPipe, NgComponentOutlet} from "@angular/common";
import {ComponentInfo} from "@pages/dynamic-page/component-info";
import {FormControl, FormControlDirective, ReactiveFormsModule} from "@angular/forms";
import {ControlStatusComponent} from "@domain/control-status/control-status.component";
import {CounterWrapperComponent} from "@controls/counter/doc/counterWrapper.component";

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    NgComponentOutlet,
    ControlStatusComponent,
    JsonPipe,
  ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent implements OnDestroy{
  #route: ActivatedRoute
  #controlName = signal('')

  #subscription = new Subscription()

  #controls: {[key: string]: ComponentInfo} = {
    decimalInput: {
      component: DecimalInputComponent,
      inputs: {formControl: new FormControl()},

    },
    counter: {
      component: CounterWrapperComponent,
      inputs: {
        min: 0,
        max: 10,
        formControl: new FormControl(0)
      },
    }
  }

  dynamicModules: Type<ReactiveFormsModule> = ReactiveFormsModule



  get currentComponentInfo() {
    return this.#controls[this.#controlName()]
  }

  get inputs() {
    return this.currentComponentInfo.inputs
  }

  constructor() {
    this.#route = inject(ActivatedRoute)

    const routeSubscription = this.#route.params.pipe(
      map(params => params['control']),
      filter(controlName => !!controlName)
    ).subscribe(controlName => this.#controlName.set(controlName))
    this.#subscription.add(routeSubscription)
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }

  protected readonly FormControl = FormControl;
  protected readonly FormControlDirective = FormControlDirective;
}

