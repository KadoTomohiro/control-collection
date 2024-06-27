import {ValidationMessage} from "../shared/validation-message/validation-message";

export const defaultValidationMessages: ValidationMessage = {
  required: '必須入力です',
  min: '{{actual}}以上で入力してください',
  minlength: '{{requiredLength}}文字以上で入力してください',
}
