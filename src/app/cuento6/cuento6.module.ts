import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento6PageRoutingModule } from './cuento6-routing.module';

import { Cuento6Page } from './cuento6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento6PageRoutingModule
  ],
  declarations: [Cuento6Page]
})
export class Cuento6PageModule {}
