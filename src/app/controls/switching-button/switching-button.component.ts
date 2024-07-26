import {Component, computed, inject, input, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  ValidationErrors
} from "@angular/forms";
import {Options} from "@models/options/options";
import {SelectorDirective} from "@controls/selector/selector.directive";

@Component({
  selector: 'app-switching-button',
  standalone: true,
  imports: [],
  providers: [
  ],
  templateUrl: './switching-button.component.html',
  styleUrl: './switching-button.component.css',
  hostDirectives: [
  ]
})
export class SwitchingButtonComponent{
  label = computed<string>(() => {
    return this.selector.selected()?.label ?? ''
  });

  selector: SelectorDirective;
  constructor() {
    this.selector = inject(SelectorDirective, {self: true})
  }

  onClick() {
    const nextIndex = this.getNextIndex()
    this.selector.selectValueByIndex(nextIndex)
  }

  getNextIndex() {
    const currentIndex = this.selector.options().findIndex(option => option.value === this.selector.selected()?.value)
    return (currentIndex + 1) % this.selector.options().length
  }

}
