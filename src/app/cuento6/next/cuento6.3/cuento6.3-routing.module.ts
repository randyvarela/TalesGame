import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento63Page } from './cuento6.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento63Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento63PageRoutingModule {}
