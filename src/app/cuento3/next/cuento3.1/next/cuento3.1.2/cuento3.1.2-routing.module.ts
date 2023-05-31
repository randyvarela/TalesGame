import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento312Page } from './cuento3.1.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento312Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento312PageRoutingModule {}
