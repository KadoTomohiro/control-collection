import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ControlListPageComponent} from "@pages/control-list-page/control-list-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlListPageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
