import {Component, computed, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {Decimal, DecimalFormat} from '@models/decimal/decimal';
import {decimalValidator} from "@controls/decimal-input/decimal-validator";

/**
 * 実数入力コンポーネント
 */
@Component({
  selector: 'app-decimal-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: DecimalInputComponent, multi: true},
    {provide: NG_VALIDATORS, useExisting: DecimalInputComponent, multi: true}
  ],
  templateUrl: './decimal-input.component.html',
  styleUrl: './decimal-input.component.css'
})
export class DecimalInputComponent implements ControlValueAccessor, Validator{
  readonly value = model<DecimalFormat>(new Decimal({integer: 0, fraction: 0}));
  readonly #changeValue = computed(() => this.value(), {equal: Decimal.equal})
  #onChange = (_value: DecimalFormat) => {};
  #onTouch = () => {};
  touched = signal<boolean>(false)
  disabled= signal(false);

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouch = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  validate(control: AbstractControl<DecimalFormat>): ValidationErrors | null {
    return decimalValidator(control);
  }

  writeValue(value: DecimalFormat): void {
    this.value.set(new Decimal(value));
  }

  markAsTouch() {
    if (this.touched()) return
    this.#onTouch()
    this.touched.set(true);
  }

  onFocus() {
    this.markAsTouch();
  }

  onChangeInteger(integer: number): void {
    if (this.disabled()) return;
    this.value.update(crr => (new Decimal({...crr, integer})))
    this.#onChange(this.#changeValue())

  }
  onChangeFraction(fraction: number): void {
    if (this.disabled()) return;
    this.value.update(crr => (new Decimal({...crr, fraction})))
    this.#onChange(this.#changeValue())
  }

}
