import {Injector, Type} from "@angular/core";

export interface ControlDemoProperty {
  [key: string] : DemoOutletComponent[]
}

export interface DemoOutletComponent {
  title: string;
  component: Type<any> | null;
  inputs?: Record<string, unknown>;
  injector?: Injector;
}
