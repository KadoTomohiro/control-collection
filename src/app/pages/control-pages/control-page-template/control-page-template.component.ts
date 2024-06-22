import {Component, ContentChild, ElementRef} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName} from "@angular/forms";
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
  // でもFormControlNameつかうと参照できねーよこれ
  @ContentChild(FormControlDirective) formControl?: FormControl;
  // あーこれでも参照できるんだ。テンション上がってきた
  @ContentChild(FormControlName) formControlName?: FormControl
  // TODO: ぶっちゃけこのコンポーネント（テンプレーと）でformControl参照するのは責務違反な気がする。ページでやれ
  // TODO: この実装は面白いからエラーラベル出すコンポーネント作って移植する
  get control(): FormControl | undefined {
    return this.formControl || this.formControlName
  }

  @ContentChild('alert') alertContent?: ElementRef
  get hasAlert(): boolean {
    return !!this.alertContent;
  }
}
