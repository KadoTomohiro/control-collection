import { Component } from '@angular/core';
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CounterComponent} from "@controls/counter/counter.component";
import {DataListComponent} from "@parts/data-list/data-list.component";

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [
    ControlPageTemplateComponent,
    CounterComponent,
    ReactiveFormsModule,
    DataListComponent
  ],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  control = new FormControl<number>(0)
}
