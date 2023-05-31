import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuento21Page } from './cuento2.1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuento21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuento21PageRoutingModule {}
