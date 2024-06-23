import {Component, input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-control-command-set',
  standalone: true,
  imports: [],
  templateUrl: './control-command-set.component.html',
  styleUrl: './control-command-set.component.css'
})
export class ControlCommandSetComponent {
  control = input.required<AbstractControl>()

  onDisable() {
    this.control().disable();
  }

  onEnable() {
    this.control().enable();
  }
}
