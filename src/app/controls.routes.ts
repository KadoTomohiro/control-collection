import {Routes} from "@angular/router";

export const controlRoutes: Routes = [
  {
    path: 'input',
    loadComponent: () => import('@pages/control-pages/input-page/input-page.component')
      .then(m => m.InputPageComponent),
  },
  {
    path: 'counter',
    loadComponent: () => import('@pages/control-pages/counter-page/counter-page.component')
      .then(m => m.CounterPageComponent)
  },
  {
    path: 'decimal-input',
    loadComponent: () => import('@pages/control-pages/decimal-input-page/decimal-input-page.component')
      .then(m => m.DecimalInputPageComponent)
  },
  {
    path: 'toggle-button',
    loadComponent: () => import('@pages/control-pages/toggle-button-page/toggle-button-page.component')
      .then(m => m.ToggleButtonPageComponent)
  },
  {
    path: 'json-input',
    loadComponent: () => import('@pages/control-pages/json-input-page/json-input-page.component')
      .then(m => m.JsonInputPageComponent)
  },
  {
    path: 'toggle-switch',
    loadComponent: () => import('@pages/control-pages/toggle-switch-page/toggle-switch-page.component')
      .then(m => m.ToggleSwitchPageComponent)
  }
]
