import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento62Page } from './cuento6.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento62PageRoutingModule {}
