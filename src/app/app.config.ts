import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {APP_VALIDATION_MESSAGES} from "./shared/validation-message/validation-message.service";
import {builtInValidationMessages} from "./setings/validation-messages";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection() ,
    provideRouter(routes),
    {provide: APP_VALIDATION_MESSAGES, useValue: builtInValidationMessages, multi: true},
  ]
};
