import {Provider} from "@angular/core";
import {counterDocProvider} from "@controls/counter/doc/counter.demo";
import {decimalInputDocProvide} from "@controls/decimal-input/doc/decimal-input.demo";

export const controlDemoPropertyProvider: Provider[] = [
  counterDocProvider,
  decimalInputDocProvide
]

export function provideControlDemoProperties(): Provider[] {
  return controlDemoPropertyProvider
}
