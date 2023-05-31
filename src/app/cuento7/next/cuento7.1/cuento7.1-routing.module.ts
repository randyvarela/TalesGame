import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento71Page } from './cuento7.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento71Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento71PageRoutingModule {}
