import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento71PageRoutingModule } from './cuento7.1-routing.module';

import { Cuento71Page } from './cuento7.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento71PageRoutingModule
  ],
  declarations: [Cuento71Page]
})
export class Cuento71PageModule {}
