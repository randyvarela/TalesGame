import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento82PageRoutingModule } from './cuento8.2-routing.module';

import { Cuento82Page } from './cuento8.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento82PageRoutingModule
  ],
  declarations: [Cuento82Page]
})
export class Cuento82PageModule {}
