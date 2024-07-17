import { Component, model, signal } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  ValidationErrors
} from "@angular/forms";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-switching-button',
  standalone: true,
  imports: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SwitchingButtonComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: SwitchingButtonComponent, multi: true}
  ],
  templateUrl: './switching-button.component.html',
  styleUrl: './switching-button.component.css'
})
export class SwitchingButtonComponent implements ControlValueAccessor, Validator{

  readonly value = model<any>();
  readonly disabled = signal<boolean>(false);
  readonly #touched = signal<boolean>(false);

  #onChange = (_value: any) => {};
  #onTouched = () => {};
  #onValidatorChange = () => {};

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.#onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: number): void {
    this.value.set(value);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control) return null;
    const {value} = control.value;

    return null;
  }

  #markAsDirty() {
      if (!this.#touched()) {
        this.#onTouched();
        this.#touched.set(true);
      }
    }
}
