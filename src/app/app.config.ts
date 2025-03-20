import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {APP_VALIDATION_MESSAGES} from "./shared/validation-message/validation-message.service";
import {builtInValidationMessages} from "./setings/built-in-validation-messages";
import {customValidationMessages} from "./setings/custom-validation-messages";
import {provideHttpClient} from "@angular/common/http";
import {CLIPBOARD_OPTIONS, ClipboardButtonComponent, provideMarkdown} from "ngx-markdown";
import {provideControlDemoProperties} from "@controls/provideControlDemo";
import {provideArticleNames} from "./articles/provideArticleNames";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection() ,
    provideRouter(routes),
    provideHttpClient(),
    provideMarkdown({
      clipboardOptions: {
        provide: CLIPBOARD_OPTIONS,
        useValue: {
          buttonComponent: ClipboardButtonComponent,
        },
      },
    }),
    provideControlDemoProperties(),
    provideArticleNames(),
    {provide: APP_VALIDATION_MESSAGES, useValue: builtInValidationMessages, multi: true},
    {provide: APP_VALIDATION_MESSAGES, useValue: customValidationMessages, multi: true},
  ],
};
