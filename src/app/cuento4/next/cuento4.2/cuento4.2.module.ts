import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento42PageRoutingModule } from './cuento4.2-routing.module';

import { Cuento42Page } from './cuento4.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento42PageRoutingModule
  ],
  declarations: [Cuento42Page]
})
export class Cuento42PageModule {}
