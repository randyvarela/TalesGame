import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento13Page } from './cuento1.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento13PageRoutingModule {}
