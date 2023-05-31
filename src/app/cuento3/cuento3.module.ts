import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento3PageRoutingModule } from './cuento3-routing.module';

import { Cuento3Page } from './cuento3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento3PageRoutingModule
  ],
  declarations: [Cuento3Page]
})
export class Cuento3PageModule {}
