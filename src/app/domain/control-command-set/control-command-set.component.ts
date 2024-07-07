import {Component, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TypedInputComponent, ValueType} from "@controls/typed-input/typed-input.component";

@Component({
  selector: 'app-control-command-set',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TypedInputComponent
  ],
  templateUrl: './control-command-set.component.html',
  styleUrl: './control-command-set.component.css'
})
export class ControlCommandSetComponent {
  control = input.required<FormControl>()
  valueType = input.required<ValueType>()
  readonly disableOption = new FormGroup({
    opts: new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly enableOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly markAsTouchedOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly markAsUntouchedOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly markAsDirtyOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly markAsPristineOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly markAsPendingOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })

  readonly setValueOption = new FormGroup({
    value: new FormControl(),
    options: new FormGroup({
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
      emitModelToViewChange: new FormControl<boolean>(true, {nonNullable: true}),
      emitViewToModelChange: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly patchValueOption = new FormGroup({
    value: new FormControl(),
    options: new FormGroup({
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
      emitModelToViewChange: new FormControl<boolean>(true, {nonNullable: true}),
      emitViewToModelChange: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly resetOption = new FormGroup({
    value: new FormControl(),
    options: new FormGroup({
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly updateValueAndValidityOption = new FormGroup({
    opts:new FormGroup( {
      onlySelf: new FormControl<boolean>(false, {nonNullable: true}),
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })

  readonly markAllAsTouchedOption = new FormGroup({
    opts: new FormGroup({
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })
  readonly setErrorOption = new FormGroup({
    validationErrors: new FormControl(),
    opts: new FormGroup({
      emitEvent: new FormControl<boolean>(true, {nonNullable: true}),
    })
  })

  onDisable() {
    this.control().disable(this.disableOption.value.opts);
  }
  onEnable() {
    this.control().enable(this.enableOption.value.opts);
  }
  onMarkAsTouched() {
    this.control().markAsTouched(this.markAsTouchedOption.value.opts);
  }
  onMarkAsUntouched() {
    this.control().markAsUntouched(this.markAsUntouchedOption.value.opts);
  }
  onMarkAsDirty() {
    this.control().markAsDirty(this.markAsDirtyOption.value.opts);
  }
  onMarkAsPristine() {
    this.control().markAsPristine(this.markAsPristineOption.value.opts);
  }
  onMarkAsPending() {
    this.control().markAsPending(this.markAsPendingOption.value.opts);
  }
  onSetValue() {
    this.control().setValue(
      this.setValueOption.value.value,
      this.setValueOption.value.options
    );
  }
  onPatchValue() {
    this.control().patchValue(
      this.patchValueOption.value.value,
      this.patchValueOption.value.options
    );
  }
  onReset() {
    this.control().reset(
      this.resetOption.value.value,
      this.resetOption.value.options
    );
  }
  onUpdateValueAndValidity() {
    this.control().updateValueAndValidity(this.updateValueAndValidityOption.value.opts);
  }
  onMarkAllAsTouched() {
    this.control().markAllAsTouched(this.markAllAsTouchedOption.value.opts);
  }
  onSetError() {
    this.control().setErrors(
      this.setErrorOption.value.validationErrors,
      this.setErrorOption.value.opts
    )
  }
}
