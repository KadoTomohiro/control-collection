## Description

トグル式のボタンで一覧から選択する。

## Value Type

`[list]`インプットにバインドされた`Options<T>`の`T`。

### Option interface

```typescript
export interface Option<T = any> {
  label: string;
  value: T;
}

export type Options<T = any> = Option<T>[];
```

## Inputs

| Name | Type         | required | default | Description |
|------|--------------|----------|---------|-------------|
| list | `Options<T>` | true     | -       | 選択肢のセット     |

## Outputs

none

## Original Validation

* 値が選択肢の範囲外の場合エラー

| Error      | Validation Error Type | Description     |
|------------|-----------------------|-----------------|
| jsonSyntax | `{optionRange: T} `   | 選択肢外の値がセットされた場合 |


## Exception

none

## Usage

選択肢のリストを`Options<T>`型で設定した上で、Reactive Formsのコントロールとして使用する。

```html
<app-counter [list]="options" [FormControl]="control"></app-counter>
```

```typescript
class ExampleComponent {
  options: Options<number> = [
    {
      label: 'option1',
      value: 1,
    },
    {
      label: 'option2',
      value: 2,
    },

  ]
  control = new FormControl<number>(1)
}
```
