import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento22PageRoutingModule } from './cuento2.2-routing.module';

import { Cuento22Page } from './cuento2.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento22PageRoutingModule
  ],
  declarations: [Cuento22Page]
})
export class Cuento22PageModule {}
