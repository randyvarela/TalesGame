import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento321PageRoutingModule } from './cuento3.2.1-routing.module';

import { Cuento321Page } from './cuento3.2.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento321PageRoutingModule
  ],
  declarations: [Cuento321Page]
})
export class Cuento321PageModule {}
