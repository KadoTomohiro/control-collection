export type MinErrorType = { min: number, actual: number };
export type MaxErrorType = { max: number, actual: number };
export type RequiredErrorType = true;
export type EmailErrorType = true;
export type MinLengthErrorType = {requiredLength: number, actualLength: number};
export type MaxLengthErrorType = {requiredLength: number, actualLength: number};
export type PatternErrorType = {requiredPattern: string, actualValue: string};
export type NullValidatorErrorType = null;
