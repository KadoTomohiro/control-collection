import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ControlListNavComponent} from "@pages/navigations/control-list-nav/control-list-nav.component";
import {NavigationsComponent} from "@pages/navigations/navigations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlListNavComponent, RouterLink, NavigationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
