import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento32PageRoutingModule } from './cuento3.2-routing.module';

import { Cuento32Page } from './cuento3.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento32PageRoutingModule
  ],
  declarations: [Cuento32Page]
})
export class Cuento32PageModule {}
