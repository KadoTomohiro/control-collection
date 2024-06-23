import {Component, computed, EventEmitter, input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

export type ComponentInputProperty = {
  type: 'string' | 'number' | 'boolean' | 'object';
  initial: any;
}

export type ComponentInputProperties = { [name: string]:  ComponentInputProperty };

// コードは汚いしここまでしてやる価値のある内容かと言うと微妙。手気味でも変わらん気がする。
// オブジェクトをparse/stringfyするところだけ部品化するか

@Component({
  selector: 'app-input-setter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './input-setter.component.html',
  styleUrl: './input-setter.component.css'
})
export class InputSetterComponent implements OnInit{
  properties = input.required<ComponentInputProperties>()
  propertyNames = computed<string[]>(() => Object.keys(this.properties()))

  @Output() propsChange = new EventEmitter<{ [name: string]: any }>()

  form = new FormGroup({}, )

  constructor() {


  }

  ngOnInit() {
    Object.entries(this.properties()).forEach(([name, prop]) => {
      let initialValue = prop.initial;
      if (prop.type === 'object') {
        initialValue = JSON.stringify(initialValue)
      }
      this.form.addControl(name, new FormControl(initialValue))
    })
  }

  getProperty(name: string): ComponentInputProperty {
    return this.properties()[name]
  }

  reflect() {
    const value = this.form.value
    const property = value as { [name: string]: any };
    const converted: { [name: string]: any } = {}
    this.propertyNames().forEach(name => {
      let propertyValue = property[name]
      const type = this.properties()[name].type;
      if(type === 'object') {
        propertyValue = JSON.parse(propertyValue);
      }
      converted[name] = propertyValue;
    })
    this.propsChange.emit(converted)
  }

}
