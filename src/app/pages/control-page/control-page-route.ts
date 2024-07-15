import {Routes} from "@angular/router";

export const controlPageRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/control-page/document-tab/control-document.component').then(m => m.ControlDocumentComponent)
  },
  {
    path: 'demo',
    loadComponent: () => import('./demo-tab/demo-tab.component').then(m => m.DemoTabComponent)
  },
]
