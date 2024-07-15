## Description

実数値を、整数部と小数部に分けて入力する。

## Value Type

`DecimalFormat`

### DecimalFormat interface

```typescript
interface DecimalFormat {
  /** 整数部 */
  integer: number
  /** 小数部 */
  fraction: number
}
```

## Inputs

none

## Outputs

none

## Original Validation

* 整数部は、整数でなければならない。
* 小数部は0以上の整数でなければならない。

| Error             | Validation Error Type                              | Description              |
|-------------------|----------------------------------------------------|--------------------------|
| decimalTypeError  | `{decimalTypeError: ('integer' \| 'fraction')[]} ` | 整数部、小数部に整数以外の形式の入力がされた場合 |
| decimalRangeError | `{decimalRangeError: 'fraction'}`                  | 小数部に0未満の値が入力された場合        |


## Exception

none

## Usage

Reactive Formsのコントロールとして使用する。値は`DecimalFormat`のオブジェクトを使用する。

```html
<app-counter [FormControl]="control"></app-counter>
```

```typescript
class ExampleComponent {
  control = new FormControl<DecimalFormat>({integer: 0, fraction: 0})
}
```
