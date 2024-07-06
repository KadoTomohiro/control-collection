import {ValidationMessage} from "../shared/validation-message/validation-message";
import {JsonSyntaxErrorType} from "@controls/json-input/json-input.component";

export const customValidationMessages: ValidationMessage = {
  jsonSyntax: (param: JsonSyntaxErrorType) => `Jsonフォーマットで入力してください。`
}
