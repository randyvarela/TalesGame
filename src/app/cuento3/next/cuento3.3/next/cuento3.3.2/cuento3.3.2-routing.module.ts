import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento332Page } from './cuento3.3.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento332Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento332PageRoutingModule {}
