import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento53PageRoutingModule } from './cuento5.3-routing.module';

import { Cuento53Page } from './cuento5.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento53PageRoutingModule
  ],
  declarations: [Cuento53Page]
})
export class Cuento53PageModule {}
