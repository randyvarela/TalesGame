import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento23Page } from './cuento2.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento23PageRoutingModule {}
