import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento1Page } from './cuento1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento1PageRoutingModule {}
