import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento7PageRoutingModule } from './cuento7-routing.module';

import { Cuento7Page } from './cuento7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento7PageRoutingModule
  ],
  declarations: [Cuento7Page]
})
export class Cuento7PageModule {}
