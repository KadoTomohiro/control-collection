import {Component, input, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator, Validators
} from "@angular/forms";
import {defined} from "../../shared/defined/defined";
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CounterComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: CounterComponent, multi: true}
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements ControlValueAccessor, Validator{

  readonly value = model<number>(0);
  readonly disabled = signal<boolean>(false);
  readonly touched = signal<boolean>(false)

  readonly increment = input<number>(1);
  readonly min = input<number>();
  readonly max = input<number>();

  #onChange = (_value: number) => {};
  #onTouched = () => {};
  #onValidatorChange = () => {};

  constructor() {
    toObservable(this.min).subscribe(this.#onValidatorChange);
    toObservable(this.max).subscribe(this.#onValidatorChange);
    // this.value.subscribe(() => this.#onModelChange(this.value()));
  }

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouched = fn
  }

  registerOnValidatorChange(fn: () => void): void {
    this.#onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: number): void {
    this.value.set(value)
  }

  onIncrease() {
    this.markAsDirty()

    const max = this.max()
    if (defined<number>(max) && this.value() >= max) return;

    if (this.disabled()) return;
    this.value.update(v => v + this.increment())
    this.#onChange(this.value())
  }

  onReduce() {
    this.markAsDirty()
    if (this.disabled()) return;

    const min = this.min()
    if (defined<number>(min) && this.value() <= min) return;

    this.value.update(v => v - this.increment());
    this.#onChange(this.value())
  }

  markAsDirty() {
    if (!this.touched()) {
      this.#onTouched()
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const min = this.min();
    const minValidationResult = defined<number>(min) ? Validators.min(min)(control) : null
    const max = this.max();
    const maxValidationResult = defined<number>(max) ? Validators.max(max)(control) : null
    return minValidationResult || maxValidationResult;
  }
}
