import {Component, input, model, signal} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule
} from "@angular/forms";
import {JsonInputComponent} from "@controls/json-input/json-input.component";

export type ValueType = 'string' | 'boolean' | 'number' | 'object'

@Component({
  selector: 'app-typed-input',
  standalone: true,
  imports: [
    FormsModule,
    JsonInputComponent
  ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TypedInputComponent, multi: true },
  ],
  templateUrl: './typed-input.component.html',
  styleUrl: './typed-input.component.css'
})
export class TypedInputComponent implements ControlValueAccessor{

  readonly value = model<any>();
  readonly disabled = signal<boolean>(false);
  readonly #touched = signal<boolean>(false);

  type = input<ValueType>('string');

  #onChange = (_value: any) => {};
  #onTouched = () => {};

  constructor() {}

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: number): void {
    this.value.set(value);
  }

  onChange(value: any) {
    this.value.set(value)
    this.#onChange(this.value())
    this.#markAsDirty()
  }

  onBluer() {
    this.#markAsDirty();
  }

  onCheckBoxClick() {
    this.#markAsDirty();
  }
  #markAsDirty() {
      if (!this.#touched()) {
        this.#onTouched();
        this.#touched.set(true);
      }
    }
}
