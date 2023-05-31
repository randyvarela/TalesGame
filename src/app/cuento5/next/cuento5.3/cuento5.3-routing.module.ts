import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento53Page } from './cuento5.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento53PageRoutingModule {}
