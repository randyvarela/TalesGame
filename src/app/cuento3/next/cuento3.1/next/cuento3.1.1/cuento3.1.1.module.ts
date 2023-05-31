import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento311PageRoutingModule } from './cuento3.1.1-routing.module';

import { Cuento311Page } from './cuento3.1.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento311PageRoutingModule
  ],
  declarations: [Cuento311Page]
})
export class Cuento311PageModule {}
