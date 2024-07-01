import {ValidationMessage} from "../shared/validation-message/validation-message";
import {
  EmailErrorType,
  MaxErrorType,
  MaxLengthErrorType,
  MinErrorType,
  MinLengthErrorType,
  NullValidatorErrorType,
  PatternErrorType,
  RequiredErrorType
} from "../shared/validation-message/built-in-validators-error-type";

export const builtInValidationMessages: ValidationMessage = {
  min: (params: MinErrorType) => `${params.min}以上で入力してください`,
  max: (params: MaxErrorType) => `${params.max}以下で入力してください`,
  required: (_params: RequiredErrorType)  => '必須入力です',
  email: (_params: EmailErrorType) => `メールアドレス形式で入力してください`,
  minLength: (params: MinLengthErrorType) => `${params.requiredLength}文字以上で入力してください`,
  maxLength: (params: MaxLengthErrorType) => `${params.requiredLength}文字以下で入力してください`,
  pattern: (params: PatternErrorType) => `パターン${params.requiredPattern}に一致させてください`,   // このメッセージは画面ごとに上書くかも
  nullValidator: (_params: NullValidatorErrorType) => ``,
}
