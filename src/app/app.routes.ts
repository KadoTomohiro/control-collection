import { Routes } from '@angular/router';
import {controlRoutes} from "./controls.routes";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/control-list-page/control-list-page.component')
      .then(m => m.ControlListPageComponent),
  },
  // {
  //   path: 'dynamic/:control',
  //   loadComponent: () => import('./pages/dynamic-page/dynamic-page.component')
  //     .then(m => m.DynamicPageComponent),
  // },
  {
    path: 'controls',
    children: controlRoutes
  }
];
