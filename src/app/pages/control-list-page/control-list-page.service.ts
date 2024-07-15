import {inject, Injectable} from '@angular/core';
import * as changeCase from "change-case";
import {ControlDemoService} from "@domain/control-document/control-demo.service";

export type ControlPageList = {
  path: string,
  label: string
} []

@Injectable()
export class ControlListPageService {

  #controlDemoService: ControlDemoService

  constructor() {
    this.#controlDemoService = inject(ControlDemoService);
  }

  getPageList(): ControlPageList{
    return this.#controlDemoService.controlNames()
      .map(name => {
        const path = name;
        return {path, label: changeCase.capitalCase(name)}
      })
      .filter(controlPage => !!controlPage.path)
      .sort()
  }
}
