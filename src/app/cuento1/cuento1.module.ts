import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento1PageRoutingModule } from './cuento1-routing.module';

import { Cuento1Page } from './cuento1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento1PageRoutingModule
  ],
  declarations: [Cuento1Page]
})
export class Cuento1PageModule {}
