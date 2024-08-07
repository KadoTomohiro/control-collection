import {inject, Injectable, InjectionToken} from '@angular/core';
import {ValidationMessage} from "./validation-message";
import {ValidationErrors} from "@angular/forms";

export const APP_VALIDATION_MESSAGES = new InjectionToken<ValidationMessage[]>('APP_VALIDATION_MESSAGES');

@Injectable({
  providedIn: 'root',
})
export class ValidationMessageService {
  #messages: ValidationMessage;

  constructor() {
    const rowMessageSet: ValidationMessage[] =inject(APP_VALIDATION_MESSAGES);
    this.#messages = rowMessageSet.reduce(this.#mergeMessages, {});
  }

  getMessage(validationError: ValidationErrors | null): string[] {
    if (validationError === null) return [];

    const entries = Object.entries(validationError)
    return entries.map(([validationName, error]) => {
      const messageTemplate = this.#messages[validationName];
      return typeof messageTemplate === "string" ? messageTemplate : messageTemplate(error)
    })
  }

  #mergeMessages = (pre: ValidationMessage, curr: ValidationMessage) => Object.assign<ValidationMessage, ValidationMessage>(pre, curr);

}
