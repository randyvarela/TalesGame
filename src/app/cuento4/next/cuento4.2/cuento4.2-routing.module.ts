import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento42Page } from './cuento4.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento42PageRoutingModule {}
