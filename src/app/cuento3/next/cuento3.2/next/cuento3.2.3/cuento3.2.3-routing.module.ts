import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento323Page } from './cuento3.2.3.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento323Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento323PageRoutingModule {}
