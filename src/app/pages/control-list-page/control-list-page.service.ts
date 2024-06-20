import { Injectable } from '@angular/core';
import {controlRoutes} from "../../controls.routes";
import * as changeCase from "change-case";

export type ControlPageList = {
  path: string,
  label: string
} []

@Injectable()
export class ControlListPageService {

  constructor() { }

  getPageList(): ControlPageList{
    return controlRoutes
      .map(route => {
        const path = route.path || '';
        return {path, label: changeCase.capitalCase(path)}
      })
      .filter(controlPage => !!controlPage.path)
  }
}
