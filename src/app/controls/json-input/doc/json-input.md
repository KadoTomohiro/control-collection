## Description

JSONオブジェクトをテキスト入力する。

## Value Type

`Object`

## Inputs

| Name | Type     | required | default | Description |
|------|----------|----------|---------|-------------|
| row  | `number` | false    | 5       | 入力エリアの行数    |

## Outputs

none

## Original Validation

* テキストがJSONにパースできない場合エラー

| Error      | Validation Error Type | Description       |
|------------|-----------------------|-------------------|
| jsonSyntax | `{jsonSyntax: true} ` | JSONにフォーマットできない場合 |


## Exception

none

## Usage

Reactive Formsのコントロールとして使用する。ただし、`JSON.stringfy`で変換できないプロパティは無視される。

```html
<app-counter [FormControl]="control"></app-counter>
```

```typescript
class ExampleComponent {
  control = new FormControl<Object>({
    'foo': 'bar',
    'fn': () => {}  // 関数は文字列化できないため、プロパティfnは無視される。
  })
}
```
