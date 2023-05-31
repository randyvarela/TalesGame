import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento81Page } from './cuento8.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento81Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento81PageRoutingModule {}
