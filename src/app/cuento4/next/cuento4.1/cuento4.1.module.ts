import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento41PageRoutingModule } from './cuento4.1-routing.module';

import { Cuento41Page } from './cuento4.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento41PageRoutingModule
  ],
  declarations: [Cuento41Page]
})
export class Cuento41PageModule {}
