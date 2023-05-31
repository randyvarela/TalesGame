import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento332PageRoutingModule } from './cuento3.3.2-routing.module';

import { Cuento332Page } from './cuento3.3.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento332PageRoutingModule
  ],
  declarations: [Cuento332Page]
})
export class Cuento332PageModule {}
