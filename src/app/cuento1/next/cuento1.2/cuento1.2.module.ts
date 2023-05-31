import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento12PageRoutingModule } from './cuento1.2-routing.module';

import { Cuento12Page } from './cuento1.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento12PageRoutingModule
  ],
  declarations: [Cuento12Page]
})
export class Cuento12PageModule {}
