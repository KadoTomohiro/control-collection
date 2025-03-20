import {inject, Injectable} from '@angular/core';
import * as changeCase from "change-case";
import {ControlDemoService} from "@domain/control-document/control-demo.service";
import {NavigationList} from "@pages/navigations/navigation";

@Injectable()
export class ControlListNavService {

  #controlDemoService: ControlDemoService

  constructor() {
    this.#controlDemoService = inject(ControlDemoService);
  }

  getPageList(): NavigationList{
    return this.#controlDemoService.controlNames()
      .map(name => {
        const path = name;
        return {path, label: changeCase.capitalCase(name)}
      })
      .filter(controlPage => !!controlPage.path)
      .sort()
  }
}
