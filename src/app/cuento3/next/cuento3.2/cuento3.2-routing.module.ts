import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento32Page } from './cuento3.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento32PageRoutingModule {}
