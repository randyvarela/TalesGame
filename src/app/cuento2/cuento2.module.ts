import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento2PageRoutingModule } from './cuento2-routing.module';

import { Cuento2Page } from './cuento2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento2PageRoutingModule
  ],
  declarations: [Cuento2Page]
})
export class Cuento2PageModule {}
