import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento5PageRoutingModule } from './cuento5-routing.module';

import { Cuento5Page } from './cuento5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento5PageRoutingModule
  ],
  declarations: [Cuento5Page]
})
export class Cuento5PageModule {}
