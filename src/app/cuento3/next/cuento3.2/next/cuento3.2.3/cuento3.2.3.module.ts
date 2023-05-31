import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuento323PageRoutingModule } from './cuento3.2.3-routing.module';

import { Cuento323Page } from './cuento3.2.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuento323PageRoutingModule
  ],
  declarations: [Cuento323Page]
})
export class Cuento323PageModule {}
