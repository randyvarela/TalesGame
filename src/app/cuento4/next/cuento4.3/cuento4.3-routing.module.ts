import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento43Page } from './cuento4.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento43PageRoutingModule {}
