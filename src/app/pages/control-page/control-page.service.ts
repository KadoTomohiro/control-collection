import {computed, inject, Injectable, signal} from '@angular/core';
import {ControlDemoProperty} from "@domain/control-document/component-info";
import {ControlDemoService} from "@domain/control-document/control-demo.service";
import * as changeCase from "change-case";

@Injectable({
  providedIn: 'root'
})
export class ControlPageService {

  #controlDemoProperty: ControlDemoProperty
  #controlDemoService: ControlDemoService;
  #controlName = signal('')

  documentSourcePath = computed(() => {
    const fileName = changeCase.kebabCase(this.#controlName())
    return `./docs/${fileName}/doc/${fileName}.md`
  })
  title = computed(() => changeCase.capitalCase(this.#controlName()))

  get currentControlDemoList() {
    return this.#controlDemoProperty[this.#controlName()]
  }

  set controlName(name: string) {
    this.#controlName.set(name)
  }

  constructor() {
    this.#controlDemoService = inject(ControlDemoService);
    this.#controlDemoProperty = this.#controlDemoService.controlDemoProperties();
  }
}
