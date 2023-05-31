import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento21PageRoutingModule } from './cuento2.1-routing.module';

import { Cuento21Page } from './cuento2.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento21PageRoutingModule
  ],
  declarations: [Cuento21Page]
})
export class Cuento21PageModule {}
