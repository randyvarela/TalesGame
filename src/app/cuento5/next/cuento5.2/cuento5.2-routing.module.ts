import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento52Page } from './cuento5.2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento52PageRoutingModule {}
