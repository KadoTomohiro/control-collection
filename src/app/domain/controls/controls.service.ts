import {Injectable, Type} from '@angular/core';
import {DecimalInputComponent} from "@controls/decimal-input/decimal-input.component";

// いちいちページ作るのは面倒なので動的コンポーネントでどうにかしようとしたがやめようかな

type DynamicComponentList = {component: Type<any>, inputs: Record<string, unknown>}[]

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }

  getControls(): DynamicComponentList {
    return [
      {
        component: DecimalInputComponent,
        inputs:{}
      }
    ]
  }
}
