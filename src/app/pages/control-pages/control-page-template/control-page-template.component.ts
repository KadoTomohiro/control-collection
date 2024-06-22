import {Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName, FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ControlStatusComponent} from "@domain/control-status/control-status.component";
import {CounterComponent} from "@controls/counter/counter.component";

@Component({
  selector: 'app-control-page-template',
  standalone: true,
  imports: [
    JsonPipe,
    ControlStatusComponent,
    CounterComponent,
    FormsModule
  ],
  templateUrl: './control-page-template.component.html',
  styleUrl: './control-page-template.component.css'
})
export class ControlPageTemplateComponent {
  // [FormControl]をバインドされたコンポーネントが投影されたら取得する実装例。実用性があるかは微妙。
  // 普通にバインドさせる方が安全な気はする。
  // バリデーションエラー文言とか表示させるのに使えるか？
  // でもFormControlNameつかうと参照できねーよこれ
  // @ContentChild(FormControlDirective) formControl?: FormControl;
  // // あーこれでも参照できるんだ。テンション上がってきた
  // @ContentChild(FormControlName) formControlName?: FormControl
  // // TODO: ぶっちゃけこのコンポーネント（テンプレーと）でformControl参照するのは責務違反な気がする。ページでやれ
  // // TODO: この実装は面白いからエラーラベル出すコンポーネント作って移植する
  // get control(): FormControl | undefined {
  //   return this.formControl || this.formControlName
  // }

  // 複数のFormControlに対応
  counter = 0
  @ContentChildren(FormControlDirective) formControlList?: QueryList<FormControl>;
  @ContentChildren(FormControlName) formControlNameList?: QueryList<FormControl>;

  get currentControl(): FormControl | undefined {
    return this.getControls()[this.counter]
  }

  get controlLength(): number {
    return this.getControls().length;
  }

  get isMultiControl(): boolean {
    return this.controlLength > 1;
  }

  getControls(): FormControl[] {
    const formControlListArray = this.formControlList?.toArray() ?? []
    const formControlNameListArray = this.formControlNameList?.toArray() ?? []
    return formControlListArray.concat(formControlNameListArray)
  }

  show() {
    console.log(this.formControlList?.toArray(), this.formControlNameList?.toArray())
  }

  @ContentChild('alert') alertContent?: ElementRef
  get hasAlert(): boolean {
    return !!this.alertContent;
  }
}
