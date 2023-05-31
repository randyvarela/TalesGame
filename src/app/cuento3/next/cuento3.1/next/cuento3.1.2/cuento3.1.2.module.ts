import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento312PageRoutingModule } from './cuento3.1.2-routing.module';

import { Cuento312Page } from './cuento3.1.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento312PageRoutingModule
  ],
  declarations: [Cuento312Page]
})
export class Cuento312PageModule {}
