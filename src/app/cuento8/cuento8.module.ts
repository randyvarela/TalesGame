import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento8PageRoutingModule } from './cuento8-routing.module';

import { Cuento8Page } from './cuento8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento8PageRoutingModule
  ],
  declarations: [Cuento8Page]
})
export class Cuento8PageModule {}
