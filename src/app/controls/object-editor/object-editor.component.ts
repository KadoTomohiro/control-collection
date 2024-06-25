import {Component,  model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator, Validators
} from "@angular/forms";
import {defined} from "@utility/defined";
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-controls/object-editor',
  standalone: true,
  imports: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: ObjectEditorComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: ObjectEditorComponent, multi: true}
  ],
  templateUrl: './object-editor.component.html',
  styleUrl: './object-editor.component.css'
})
export class ObjectEditorComponent implements ControlValueAccessor, Validator{

  readonly value = model<Object>();
  readonly disabled = signal<boolean>(false);
  readonly touched = signal<boolean>(false)

  #onChange = (_value: any) => {};
  #onTouched = () => {};
  #onValidatorChange = () => {};

  constructor() {
    toObservable(this.value).subscribe(() => this.#onChange(this.value()));
  }

  // ControlValueAccessor implementation
  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: number): void {
    this.value.set(value)
  }

  // Validator implementation
  registerOnValidatorChange(fn: () => void): void {
    this.#onValidatorChange = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control) {
      return null;
    }
    const {value} = control;
    // never implements validation
    return null;
  }

  // specific methods

  // this is a sample of user event handler.
  // If you need to change the value based on user input, please define the onHandler like this.
  // onHandler() {
  //   if (this.disabled()) return;
  //   this.markAsDirty()
  //
  //   this.value.set()
  // }

  #markAsDirty() {
    if (!this.touched()) {
      this.#onTouched()
      this.touched.set(true)
    }
  }


}
