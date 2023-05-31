import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento4PageRoutingModule } from './cuento4-routing.module';

import { Cuento4Page } from './cuento4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento4PageRoutingModule
  ],
  declarations: [Cuento4Page]
})
export class Cuento4PageModule {}
