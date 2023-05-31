import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento51PageRoutingModule } from './cuento5.1-routing.module';

import { Cuento51Page } from './cuento5.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento51PageRoutingModule
  ],
  declarations: [Cuento51Page]
})
export class Cuento51PageModule {}
