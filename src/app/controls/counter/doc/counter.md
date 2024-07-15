## Description

数字をカウントアップ/ダウンで入力する。

## Value Type

`number`

## Inputs

| Name | Type     | Description |
|------|----------|-------------|
| min  | `number` | 入力を制限する最小値  |
| max  | `number` | 入力を制限する最大値  |

## Outputs

none

## Original Validation

* `[min]`インプットがバインドされている場合、`Validators.min`が適用される。
* `[max]`インプットがバインドされている場合、`Validators.max`が適用される。

| Error | Validation Error Type                   | Description        |
|-------|-----------------------------------------|--------------------|
| min   | `{min: {min: number, actual: number}} ` | `min`未満の値がセットされた場合 |
| max   | `{max: {max: number, actual: number}}`  | `max`超過の値がセットされた場合 |


## Exception

none

## Usage

Reactive Formsのコントロールとして使用する。

```html
<app-counter [FormControl]="control"></app-counter>
```

```typescript
class ExampleComponent {
  control = new FormControl<number>(0)
}
```

入力値を制限する場合、`min`,`max`インプットを設定する。
```html
<app-counter [FormControl]="control" [min]="0" [max]="10"></app-counter>
```
