import { Component } from '@angular/core';
import {ControlPageTemplateComponent} from '@pages/control-pages/control-page-template/control-page-template.component';

@Component({
  selector: 'app-toggle-button-page',
  standalone: true,
  imports: [
    ControlPageTemplateComponent
  ],
  templateUrl: './toggle-button-page.component.html',
  styleUrl: './toggle-button-page.component.css'
})
export class ToggleButtonPageComponent {

}
