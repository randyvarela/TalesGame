import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento43PageRoutingModule } from './cuento4.3-routing.module';

import { Cuento43Page } from './cuento4.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento43PageRoutingModule
  ],
  declarations: [Cuento43Page]
})
export class Cuento43PageModule {}
