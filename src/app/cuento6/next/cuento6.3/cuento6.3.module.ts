import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento63PageRoutingModule } from './cuento6.3-routing.module';

import { Cuento63Page } from './cuento6.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento63PageRoutingModule
  ],
  declarations: [Cuento63Page]
})
export class Cuento63PageModule {}
