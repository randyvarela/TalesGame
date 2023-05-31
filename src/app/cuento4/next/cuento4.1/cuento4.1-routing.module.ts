import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento41Page } from './cuento4.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento41PageRoutingModule {}
