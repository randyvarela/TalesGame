import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento23PageRoutingModule } from './cuento2.3-routing.module';

import { Cuento23Page } from './cuento2.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento23PageRoutingModule
  ],
  declarations: [Cuento23Page]
})
export class Cuento23PageModule {}
