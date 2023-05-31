import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento322Page } from './cuento3.2.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento322Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento322PageRoutingModule {}
