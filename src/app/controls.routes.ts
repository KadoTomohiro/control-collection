import {Routes} from "@angular/router";

export const controlRoutes: Routes = [
  {
    path: 'input',
    loadComponent: () => import('@pages/control-pages/input-page/input-page.component')
      .then(m => m.InputPageComponent),
  },
  {
    path: 'decimal-input',
    loadComponent: () => import('@pages/control-pages/decimal-input-page/decimal-input-page.component')
      .then(m => m.DecimalInputPageComponent)
  },
  {
    path: 'counter',
    loadComponent: () => import('@pages/control-pages/counter-page/counter-page.component')
      .then(m => m.CounterPageComponent)
  },
]
