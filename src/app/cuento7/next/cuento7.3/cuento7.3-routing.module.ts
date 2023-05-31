import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento73Page } from './cuento7.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento73Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento73PageRoutingModule {}
