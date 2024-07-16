import {Provider} from "@angular/core";
import {counterDocProvider} from "@controls/counter/doc/counter.demo";
import {decimalInputDocProvide} from "@controls/decimal-input/doc/decimal-input.demo";
import {jsonInputDocProvide} from "@controls/json-input/doc/json-input.demo";
import {toggleButtonDocProvide} from "@controls/toggle-button/doc/toggle-button.demo";

export const controlDemoPropertyProvider: Provider[] = [
  counterDocProvider,
  decimalInputDocProvide,
  jsonInputDocProvide,
  toggleButtonDocProvide
]

export function provideControlDemoProperties(): Provider[] {
  return controlDemoPropertyProvider
}
