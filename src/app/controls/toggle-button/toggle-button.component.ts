import {Component, input, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";
import {Option, Options} from "@models/options/options";
import {NgClass} from "@angular/common";
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [
    NgClass
  ],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ToggleButtonComponent, multi: true},
    { provide: NG_VALIDATORS, useExisting: ToggleButtonComponent, multi: true},
  ],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent implements ControlValueAccessor, Validator{

  readonly list = input.required<Options>();
  readonly value = model<any>();

  readonly disabled= signal(false);
  readonly touched = signal<boolean>(false);
  #onChange = (_: any) => {}
  #onTouched = () => {}
  #onValidatorChange = () => {};

  constructor() {
    toObservable(this.list).subscribe(this.#onValidatorChange)
    // toObservable(this.value).subscribe(() => )
  }

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

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null;
    const value = this.value()
    const optionValues: Options = this.list().map((option: Option) => option.value);
    if (!optionValues.includes(value)) {
      return { invalidOption: true };
    }

    return null;
  }

  writeValue(value: any): void {
    this.value.set(value);
  }

  isSelected(value: any): boolean {
    return this.value() === value;
  }

  onSelected(value: any): void {
    if (this.disabled()) return;
    this.markAsDirty()
    this.value.set(value);
    this.#onChange(this.value())
  }

  markAsDirty() {
    if (this.touched()) return;
    this.touched.set(true);
    this.#onTouched();
  }
}
