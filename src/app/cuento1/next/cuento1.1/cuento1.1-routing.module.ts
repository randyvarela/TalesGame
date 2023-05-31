import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento11Page } from './cuento1.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento11PageRoutingModule {}
