import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento313PageRoutingModule } from './cuento3.1.3-routing.module';

import { Cuento313Page } from './cuento3.1.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento313PageRoutingModule
  ],
  declarations: [Cuento313Page]
})
export class Cuento313PageModule {}
