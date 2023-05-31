import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento72PageRoutingModule } from './cuento7.2-routing.module';

import { Cuento72Page } from './cuento7.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento72PageRoutingModule
  ],
  declarations: [Cuento72Page]
})
export class Cuento72PageModule {}
