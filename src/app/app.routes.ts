import { Routes } from '@angular/router';
import {controlRoutes} from "./controls.routes";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/control-list-page/control-list-page.component').then(m => m.ControlListPageComponent),
  },
  {
    path: 'controls',
    children: controlRoutes
  }
];
