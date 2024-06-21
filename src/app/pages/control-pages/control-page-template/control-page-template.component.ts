import {Component, ContentChild} from '@angular/core';
import {FormControl, FormControlDirective} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ControlStatusComponent} from "@domain/control-status/control-status.component";

@Component({
  selector: 'app-control-page-template',
  standalone: true,
  imports: [
    JsonPipe,
    ControlStatusComponent
  ],
  templateUrl: './control-page-template.component.html',
  styleUrl: './control-page-template.component.css'
})
export class ControlPageTemplateComponent {
  // [FormControl]をバインドされたコンポーネントが投影されたら取得する実装例。実用性があるかは微妙。
  // 普通にバインドさせる方が安全な気はする。
  // バリデーションエラー文言とか表示させるのに使えるか？
  @ContentChild(FormControlDirective) control?: FormControl;

}
