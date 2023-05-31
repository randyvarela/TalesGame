import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento6Page } from './cuento6.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento6PageRoutingModule {}
