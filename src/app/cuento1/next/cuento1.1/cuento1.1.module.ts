import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento11PageRoutingModule } from './cuento1.1-routing.module';

import { Cuento11Page } from './cuento1.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento11PageRoutingModule
  ],
  declarations: [Cuento11Page]
})
export class Cuento11PageModule {}
