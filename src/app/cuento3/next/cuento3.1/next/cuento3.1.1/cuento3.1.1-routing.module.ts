import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento311Page } from './cuento3.1.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento311Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento311PageRoutingModule {}
