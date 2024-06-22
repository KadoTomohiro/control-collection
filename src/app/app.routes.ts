import { Routes } from '@angular/router';
import {controlRoutes} from "./controls.routes";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/top-page/top-page.component')
      .then(m => m.TopPageComponent)
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
