import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento5Page } from './cuento5.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento5Page
  },
  {
    path: 'cuento5.1',
    loadChildren: () => import('./next/cuento5.1/cuento5.1.module').then( m => m.Cuento51PageModule)
  },
  {
    path: 'cuento5.2',
    loadChildren: () => import('./next/cuento5.2/cuento5.2.module').then( m => m.Cuento52PageModule)
  },
  {
    path: 'cuento5.3',
    loadChildren: () => import('./next/cuento5.3/cuento5.3.module').then( m => m.Cuento53PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento5PageRoutingModule {}
