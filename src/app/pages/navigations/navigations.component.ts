import { Component } from '@angular/core';
import {ControlListNavComponent} from "@pages/navigations/control-list-nav/control-list-nav.component";
import {ArticleListNavComponent} from "@pages/navigations/article-list-nav/article-list-nav.component";

@Component({
  selector: 'app-navigations',
  standalone: true,
  imports: [
    ControlListNavComponent,
    ArticleListNavComponent
  ],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.css'
})
export class NavigationsComponent {

}
