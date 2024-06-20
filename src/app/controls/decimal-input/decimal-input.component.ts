import { Component } from '@angular/core';
import {AbstractControl, ControlValueAccessor, ValidationErrors, Validator} from "@angular/forms";

/**
 * 実数入力コンポーネント
 */
@Component({
  selector: 'app-decimal-input',
  standalone: true,
  imports: [],
  templateUrl: './decimal-input.component.html',
  styleUrl: './decimal-input.component.css'
})
export class DecimalInputComponent implements ControlValueAccessor, Validator{
  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  writeValue(obj: any): void {
  }

}
