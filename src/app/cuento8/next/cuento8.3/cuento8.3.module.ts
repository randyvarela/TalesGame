import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento83PageRoutingModule } from './cuento8.3-routing.module';

import { Cuento83Page } from './cuento8.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento83PageRoutingModule
  ],
  declarations: [Cuento83Page]
})
export class Cuento83PageModule {}
