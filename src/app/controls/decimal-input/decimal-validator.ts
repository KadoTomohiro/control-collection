import {AbstractControl, ValidationErrors} from "@angular/forms";

export function decimalValidator(control: AbstractControl): ValidationErrors | null {
  const errors = {}
  const {value} = control
  const {integer, fraction} = value

  // 形式チェック
  const typeError = []
  // 整数部は整数表現である必要がある
  if (!Number.isInteger(integer)) {
    typeError.push('integer')
  }
  // 小数部は整数表現である必要がある
  if (!Number.isInteger(fraction)) {
    typeError.push('fraction')
  }
  if (typeError.length > 0) {
    Object.assign(errors, {'decimalTypeError':  typeError})
  }

  // 範囲チェック
  // 小数部は0以上でなければならない
  if (fraction < 0) {
    Object.assign(errors, {'decimalRangeError': 'fraction'})
  }
  return Object.keys(errors).length > 0 ? errors : null
}
