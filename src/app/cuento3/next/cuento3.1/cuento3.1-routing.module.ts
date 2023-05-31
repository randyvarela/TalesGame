import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento31Page } from './cuento3.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento31PageRoutingModule {}
