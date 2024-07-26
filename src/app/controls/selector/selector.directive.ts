import {Component, computed, Directive, inject, Injector, input, output, signal} from '@angular/core';
import {Option, Options} from "@models/options/options";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

@Directive({
  selector: '[appSelector]',
  standalone: true,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SelectorDirective, multi: true },
  ],
})
export class SelectorDirective implements ControlValueAccessor{

  options = input<Options>([])
  selected = signal<Option | null | undefined>(null)
  value = computed(() => this.selected()?.value)
  label = computed(() => this.selected()?.label)

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
    this.#onChange(this.value())
  }

}

@Component({
  selector: 'app-select',
  standalone: true,
  template: `<select (change)="onChange($event)">
    <option value="1">1</option>
    <option value="2">2</option>
  </select>`
})
export class SelectComponent {
  change = output<string>()
  protected onChange (event: Event){
    this.change.emit('')
    // event.stopPropagation()
  }
}
