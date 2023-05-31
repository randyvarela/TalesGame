import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento322PageRoutingModule } from './cuento3.2.2-routing.module';

import { Cuento322Page } from './cuento3.2.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento322PageRoutingModule
  ],
  declarations: [Cuento322Page]
})
export class Cuento322PageModule {}
