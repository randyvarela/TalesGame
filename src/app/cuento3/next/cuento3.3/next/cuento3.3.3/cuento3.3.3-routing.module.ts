import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento333Page } from './cuento3.3.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento333Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento333PageRoutingModule {}
