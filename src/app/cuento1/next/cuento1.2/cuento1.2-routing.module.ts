import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento12Page } from './cuento1.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento12PageRoutingModule {}
