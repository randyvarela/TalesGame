import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento62PageRoutingModule } from './cuento6.2-routing.module';

import { Cuento62Page } from './cuento6.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento62PageRoutingModule
  ],
  declarations: [Cuento62Page]
})
export class Cuento62PageModule {}
