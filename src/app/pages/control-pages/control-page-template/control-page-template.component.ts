import {Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName, FormsModule, NgControl} from "@angular/forms";
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
  // @ContentChild(FormControlDirective) formControl?: FormControl
  // //これはOK
  // @ContentChildren(FormControlDirective) formControlList?: QueryList<FormControl>;
  // // これは取れる
  // @ContentChild(FormControlName, {descendants: true}) formControlName?: FormControl
  // // これはダメ。謎 -> descendantsオンにして子孫要素を探させる
  // @ContentChildren(FormControlName, {descendants: true}) formControlNameList?: QueryList<FormControl>;
  // // これはOK
  // @ContentChild(NgControl) control?: NgControl;
  // これが一番いい。全部取れる。
  @ContentChildren(NgControl, {descendants: true}) controlList?: QueryList<FormControlDirective | FormControlName>


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
    const guard = (value: FormControlDirective | FormControlName): value is FormControlDirective => {
      return 'form' in value
    }
    return (this.controlList?.toArray() ?? [])
      .map(controlWrapper => {
      if (guard(controlWrapper)) {
        return controlWrapper.form
      } else {
        return controlWrapper.control
      }
    })
  }

  show() {

    // console.log('formControl', this.formControl,)
    // console.log('formControlList', this.formControlList)
    // console.log('formControlName', this.formControlName)
    // console.log('formControlNameList', this.formControlNameList)
    // console.log('control', this.control,)
    console.log('controlList', this.controlList)

  }

  @ContentChild('alert') alertContent?: ElementRef
  get hasAlert(): boolean {
    return !!this.alertContent;
  }

  @ContentChild('issue') issueContent?: ElementRef
  get hasIssue():boolean {
    return !!this.issueContent;
  }

  // ContentChildrenで取得したFormControlに対し、活性制御をしようとした残骸。
  // 参照はできるがdisable/enableは無理。setvalueはいけた。理由がよくわからない
  // toggleDisabled(): void {
  //
  //   console.log(this.controlList?.get(this.counter))
  //   const control = this.currentControl;
  //   if (!control) return;
  //   this.controlList?.get(this.counter)?.
    // console.log(control)
    // const {disabled, enable, disable } = control
    // const command = disabled ? enable : disable;
    // console.log(command)
    // command()
  // }
}
