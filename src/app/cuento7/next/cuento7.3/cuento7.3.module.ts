import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento73PageRoutingModule } from './cuento7.3-routing.module';

import { Cuento73Page } from './cuento7.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento73PageRoutingModule
  ],
  declarations: [Cuento73Page]
})
export class Cuento73PageModule {}
