import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento33Page } from './cuento3.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento33PageRoutingModule {}
