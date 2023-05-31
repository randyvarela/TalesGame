import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento51Page } from './cuento5.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento51PageRoutingModule {}
