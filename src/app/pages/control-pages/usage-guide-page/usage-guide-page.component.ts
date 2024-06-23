import { Component } from '@angular/core';
import {ControlPageTemplateComponent} from "@pages/control-pages/control-page-template/control-page-template.component";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-usage-guide-page',
  standalone: true,
  imports: [
    ControlPageTemplateComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './usage-guide-page.component.html',
  styleUrl: './usage-guide-page.component.css'
})
export class UsageGuidePageComponent {
  control = new FormControl('')
  value = ''
}
