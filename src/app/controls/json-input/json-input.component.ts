import {Component, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  ValidationErrors, FormsModule
} from "@angular/forms";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-json-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: JsonInputComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: JsonInputComponent, multi: true}
  ],
  templateUrl: './json-input.component.html',
  styleUrl: './json-input.component.css'
})
export class JsonInputComponent implements ControlValueAccessor, Validator{

  readonly value = model<Object | null>({});
  readonly stringifyValue = signal<string>('');
  readonly disabled = signal<boolean>(false);
  readonly #touched = signal<boolean>(false);
  readonly #isParsable = signal<boolean>(true);

  #onChange = (_value: Object | null) => {};
  #onTouched = () => {};
  #onValidatorChange = () => {};

  constructor() {
    toObservable(this.value).subscribe(() => {
      if (this.#isParsable()) {
        this.stringifyValue.set(this.#stringify(this.value()))
      }
      this.#onChange(this.value())
    });
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

  writeValue(value: number): void {
    this.value.set(value);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control) return null;
    return this.#isParsable() ? null : {jsonSyntax: false}
  }

  onChange(input: string) {
    if (this.disabled()) return
    this.#markAsDirty()
    const json = this.#toJson(input);
    this.value.set(json);


  }

  #markAsDirty() {
    if (!this.#touched()) {
      this.#onTouched();
      this.#touched.set(true);
    }
  }

  #toJson(value: string) {
    try {
      const json = JSON.parse(value);
      this.#isParsable.set(true);
      return json;
    } catch {
      this.#isParsable.set(false);
      return null;
    }
  }

  #stringify(json: any) {
    return JSON.stringify(json);
  }
}
