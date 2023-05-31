import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento333PageRoutingModule } from './cuento3.3.3-routing.module';

import { Cuento333Page } from './cuento3.3.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento333PageRoutingModule
  ],
  declarations: [Cuento333Page]
})
export class Cuento333PageModule {}
