import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/top-page/top-page.component')
      .then(m => m.TopPageComponent)
  },
  {
    path: 'controls/:control',
    loadComponent: () => import('@pages/control-page/control-page.component')
      .then(m => m.ControlPageComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/control-page/control-page-route').then(m => m.controlPageRoute)
      }
    ]
  },
];
