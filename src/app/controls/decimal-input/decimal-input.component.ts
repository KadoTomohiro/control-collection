import {Component, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {Decimal, DecimalFormat} from '@models/decimal/decimal';

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
  value = model<Decimal>(new Decimal({integer: 0, fraction: 0}));
  #onChange = (_value: Decimal) => {};
  #onTouched = () => {};
  disabled= signal(false);

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  writeValue(value: DecimalFormat): void {
    this.value.set(new Decimal(value));
  }

}
