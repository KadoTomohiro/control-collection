import {Routes} from "@angular/router";

export const controlRoutes: Routes = [
  {
    path: 'decimal-input',
    loadComponent: () => import('./pages/control-page/decimal-input-page/decimal-input-page.component')
      .then(m => m.DecimalInputPageComponent)
  },
]
