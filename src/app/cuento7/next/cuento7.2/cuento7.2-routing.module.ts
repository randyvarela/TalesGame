import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento72Page } from './cuento7.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento72Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento72PageRoutingModule {}
