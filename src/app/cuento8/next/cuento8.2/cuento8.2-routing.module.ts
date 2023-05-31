import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento82Page } from './cuento8.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento82Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento82PageRoutingModule {}
