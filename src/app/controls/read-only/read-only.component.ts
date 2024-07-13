import { Component, model, signal } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: 'app-read-only',
  standalone: true,
  imports: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: ReadOnlyComponent, multi: true },
  ],
  templateUrl: './read-only.component.html',
  styleUrl: './read-only.component.css'
})
export class ReadOnlyComponent implements ControlValueAccessor{

  readonly value = model<any>();
  readonly disabled = signal<boolean>(false);

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: number): void {
    this.value.set(value);
  }
}
