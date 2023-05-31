import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento83Page } from './cuento8.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento83Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento83PageRoutingModule {}
