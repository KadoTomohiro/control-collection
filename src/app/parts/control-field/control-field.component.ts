import {AfterContentInit, Component, ContentChild, inject, input, signal} from '@angular/core';
import {LabelComponent} from "@parts/label/label.component";
import {NgControl} from "@angular/forms";
import {ControlDecoratorComponent} from "@parts/control-decorator/control-decorator.component";
import {NgClass} from "@angular/common";
import {ValidationMessageService} from "../../shared/validation-message/validation-message.service";

@Component({
  selector: 'app-control-field',
  standalone: true,
  imports: [
    LabelComponent,
    ControlDecoratorComponent,
    NgClass
  ],
  templateUrl: './control-field.component.html',
  styleUrl: './control-field.component.css'
})
export class ControlFieldComponent implements AfterContentInit {
  readonly label = input('');
  messages = signal<string[]>([])
  messageService: ValidationMessageService

  constructor() {
    this.messageService = inject(ValidationMessageService);
  }

  @ContentChild(NgControl) controlRef!: NgControl;

  get hasError():boolean {
    return (this.controlRef?.touched && this.controlRef?.invalid) ?? false;
  }

  get loading(): boolean {
    return this.controlRef?.pending ?? false;
  }

  ngAfterContentInit(): void {
    this.controlRef.control?.events.subscribe(() => {
      const errors = this.controlRef.errors
      this.messages.set(this.messageService.getMessage(errors));
    })
  }
}
