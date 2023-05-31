import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento2Page } from './cuento2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento2PageRoutingModule {}
