import {Component, input, model, signal} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CounterComponent, multi: true },
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements ControlValueAccessor{

  readonly value = model<number>(0);
  readonly disabled = signal<boolean>(false);
  readonly touched = signal<boolean>(false)

  readonly increment = input<number>(1);
  readonly min = input<number>();
  readonly max = input<number>();

  #onChange = (_value: number) => {};
  #onTouched = () => {}

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

  onIncrease() {
    this.markAsDirty()

    const max = this.max()
    if (max !== undefined && this.value() >= max) return;

    if (this.disabled()) return;
    this.value.update(v => v + this.increment())


    this.#onChange(this.value())
  }

  onReduce() {
    this.markAsDirty()
    if (this.disabled()) return;

    const min = this.min()
    if (min !== undefined && this.value() <= min) return;

    this.value.update(v => v - this.increment());


    this.#onChange(this.value())
  }

  markAsDirty() {
    if (!this.touched()) {
      this.#onTouched()
    }
  }
}
