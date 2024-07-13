import {Injector, Type} from "@angular/core";
import {FormControl} from "@angular/forms";

export interface ComponentInfo {
  component: Type<any> | null;
  inputs?: {formControl: FormControl} & Record<string, unknown>;
  injector?: Injector;
}
