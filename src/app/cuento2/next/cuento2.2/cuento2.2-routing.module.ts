import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento22Page } from './cuento2.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento22PageRoutingModule {}
