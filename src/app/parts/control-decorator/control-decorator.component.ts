import {Component, HostBinding, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control-decorator',
  standalone: true,
  imports: [],
  templateUrl: './control-decorator.component.html',
  styleUrl: './control-decorator.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ControlDecoratorComponent {
  hasError = input.required<boolean>();
  @HostBinding('class.app-control-decorator-has-error') get invalid() {
    return this.hasError();
  }
}
