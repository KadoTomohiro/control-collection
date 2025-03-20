import {computed, Directive, input, output, signal} from '@angular/core';
import {Option, Options} from "@models/options/options";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

type Optionable<T = any> = Option<T> | null | undefined;
type OptionableValue<T = any> = T | null | undefined;

@Directive({
  selector: '[appSelector]',
  standalone: true,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SelectorDirective, multi: true },
  ],
})
export class SelectorDirective implements ControlValueAccessor{

  options = input<Options>([])

  selected = signal<Optionable>(null)
  selectedValue = computed<OptionableValue>(() => this.selected()?.value)
  selectedLabel = computed<string | string[]>(() => this.selected()?.label ?? '')

  multiple = input(false)

  change = output<Optionable>()

  readonly disabled= signal(false);
  readonly touched = signal<boolean>(false);
  #onChange = (_: any) => {}
  #onTouched = () => {}

  constructor() {}

  selectValueByIndex(index: number) {
    this.#updateValue(this.options()[index])
  }

  selectValue(value: any) {
    const option = this.options().find(option => option.value === value)
    this.#updateValue(option)

  }

  resetValue() {
    this.#updateValue(null)
  }

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: any): void {
    console.log(value)
    this.selectValue(value)
  }


  markAsDirty() {
    if (this.touched()) return;
    this.touched.set(true);
    this.#onTouched();
  }

  #updateValue(value: Option | null | undefined) {
    if (this.disabled()) return;
    this.markAsDirty()
    this.selected.set(value)
    this.#onChange(this.selectedValue())
    this.change.emit(value)
  }

  #getValue(option: Optionable): OptionableValue {
    if (Array.isArray(option)) {
      return option.map(option => option.value)
    } else if (option instanceof Option) {
      return option.value
    }
    return null
  }

  #getLabel(option: Optionable): string | string[] {
    if (Array.isArray(option)) {
      return option.map(option => option.label)
    } else if (option instanceof Option) {
      return option.label
    }
    return ''
  }
}

class SingleSelector {

}

class MultipleSelector {

}
