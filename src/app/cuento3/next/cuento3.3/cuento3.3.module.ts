import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento33PageRoutingModule } from './cuento3.3-routing.module';

import { Cuento33Page } from './cuento3.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento33PageRoutingModule
  ],
  declarations: [Cuento33Page]
})
export class Cuento33PageModule {}
