import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento61Page } from './cuento6.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento61Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento61PageRoutingModule {}
