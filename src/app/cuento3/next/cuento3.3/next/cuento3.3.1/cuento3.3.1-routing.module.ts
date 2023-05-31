import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento331Page } from './cuento3.3.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento331Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento331PageRoutingModule {}
