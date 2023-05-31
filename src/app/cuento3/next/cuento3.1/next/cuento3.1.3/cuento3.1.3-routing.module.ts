import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento313Page } from './cuento3.1.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento313Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento313PageRoutingModule {}
