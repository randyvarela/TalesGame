import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento8Page } from './cuento8.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento8PageRoutingModule {}
