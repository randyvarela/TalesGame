import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento52PageRoutingModule } from './cuento5.2-routing.module';

import { Cuento52Page } from './cuento5.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento52PageRoutingModule
  ],
  declarations: [Cuento52Page]
})
export class Cuento52PageModule {}
