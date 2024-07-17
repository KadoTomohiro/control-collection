import {computed, inject, Injectable, InjectionToken, Injector, Provider, signal} from '@angular/core';
import {ControlDemoProperty} from "@domain/control-document/component-info";

export const CONTROL_DOCUMENT_PROPERTIES =
  new InjectionToken<ControlDemoProperty[]>('ControlDemoProperties')


@Injectable({
  providedIn: 'root'
})
export class ControlDemoService {

  #documentProperties  = signal<ControlDemoProperty>({})

  readonly controlDemoProperties = computed<ControlDemoProperty>(() => this.#documentProperties());
  readonly controlNames = computed<string[]>(() => {
    console.log(this.#documentProperties())
    return Object.keys(this.#documentProperties())
  })


  constructor() {
    inject(CONTROL_DOCUMENT_PROPERTIES).forEach(prop => this.register(prop))


  }

  register(property: ControlDemoProperty) {
    this.#documentProperties.update(prop => Object.assign({}, prop, property))
  }
}
