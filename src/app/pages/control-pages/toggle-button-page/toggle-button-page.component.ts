import { Component } from '@angular/core';
import {ControlPageTemplateComponent} from '@pages/control-pages/control-page-template/control-page-template.component';
import {ToggleButtonComponent} from "@controls/toggle-button/toggle-button.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {DataListComponent} from "@parts/data-list/data-list.component";
import {Options} from "@models/options/options";
import {ControlCommandSetComponent} from "@domain/control-command-set/control-command-set.component";

@Component({
  selector: 'app-toggle-button-page',
  standalone: true,
  imports: [
    ControlPageTemplateComponent,
    ToggleButtonComponent,
    ReactiveFormsModule,
    DataListComponent,
    ControlCommandSetComponent
  ],
  templateUrl: './toggle-button-page.component.html',
  styleUrl: './toggle-button-page.component.css'
})
export class ToggleButtonPageComponent {
  control: FormControl = new FormControl('');
  list: Options<string> = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]

}
