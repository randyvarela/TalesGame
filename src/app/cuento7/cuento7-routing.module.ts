import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento7Page } from './cuento7.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento7PageRoutingModule {}
