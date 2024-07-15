import {Component, input} from '@angular/core';
import {Tab} from "@parts/tab/tab";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  tabs = input.required<Tab[]>();
}
