import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento61PageRoutingModule } from './cuento6.1-routing.module';

import { Cuento61Page } from './cuento6.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento61PageRoutingModule
  ],
  declarations: [Cuento61Page]
})
export class Cuento61PageModule {}
