import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento13PageRoutingModule } from './cuento1.3-routing.module';

import { Cuento13Page } from './cuento1.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento13PageRoutingModule
  ],
  declarations: [Cuento13Page]
})
export class Cuento13PageModule {}
