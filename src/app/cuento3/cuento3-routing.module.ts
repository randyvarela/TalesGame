import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento3Page } from './cuento3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento3PageRoutingModule {}
