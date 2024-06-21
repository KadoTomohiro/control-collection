import {Injectable, Type} from '@angular/core';
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";
import {FormControl} from "@angular/forms";

// いちいちページ作るのは面倒なので動的コンポーネントでどうにかしようとしたがうまくいかない
// 表示はできたけどformControlバインディングができない

export interface DynamicControlInformation {
  name: string;
  component: Type<any>,
  inputs: Record<string, unknown>
}

export type DynamicControlInformationList = {
  name: string;
  component: Type<any>,
  inputs: Record<string, unknown>
}[]

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }

  getControls(): DynamicControlInformationList {
    return [
      {
        name: 'decimal-input',
        component: DecimalInputComponent,
        inputs:{'[formControl]': new FormControl('')}
      }
    ]
  }

  getControl(controlName: string) {
    console.log()
    return this.getControls().find(ctrlInfo => ctrlInfo.name === controlName)
  }
}
