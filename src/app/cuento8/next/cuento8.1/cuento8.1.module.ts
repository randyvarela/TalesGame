import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento81PageRoutingModule } from './cuento8.1-routing.module';

import { Cuento81Page } from './cuento8.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento81PageRoutingModule
  ],
  declarations: [Cuento81Page]
})
export class Cuento81PageModule {}
