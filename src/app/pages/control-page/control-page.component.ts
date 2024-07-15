import {Component, computed, inject, OnDestroy, signal, Type} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {filter, map, Subscription} from "rxjs";
import {JsonPipe, NgComponentOutlet} from "@angular/common";
import {FormControl, FormControlDirective} from "@angular/forms";
import {ControlStatusComponent} from "@domain/control-status/control-status.component";
import {HttpClient} from "@angular/common/http";
import {MarkdownComponent, MarkdownModule, MarkdownService} from "ngx-markdown";
import {ControlDemoService} from "@domain/control-document/control-demo.service";
import {ControlDemoProperty} from "@domain/control-document/component-info";
import * as changeCase from "change-case";
import {ControlPageService} from "@pages/control-page/control-page.service";
import {TabComponent} from "@parts/tab/tab.component";
import {Tab} from "@parts/tab/tab";

@Component({
  selector: 'app-control-page',
  standalone: true,
  imports: [
    NgComponentOutlet,
    ControlStatusComponent,
    JsonPipe,
    MarkdownComponent,
    RouterOutlet,
    TabComponent,
  ],
  providers: [
    HttpClient,
  ],
  templateUrl: './control-page.component.html',
  styleUrl: './control-page.component.css'
})
export class ControlPageComponent implements OnDestroy{

  get title(): string {
    return this.#service.title()
  }

  tabs: Tab[] = [
    {path: './', label: 'Document'},
    {path: './demo', label: 'Demo'},
  ]

  #service: ControlPageService
  #route: ActivatedRoute
  #subscription = new Subscription()


  constructor() {
    this.#service = inject(ControlPageService);
    this.#route = inject(ActivatedRoute)
    const routeSubscription = this.#route.params.pipe(
      map(params => params['control']),
      filter(controlName => !!controlName)
    ).subscribe(controlName => this.#service.controlName = controlName)

    this.#subscription.add(routeSubscription)

  }



  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }

}

