import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento321Page } from './cuento3.2.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento321Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento321PageRoutingModule {}
