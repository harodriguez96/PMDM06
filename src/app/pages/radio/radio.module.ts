import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioPageRoutingModule } from './radio-routing.module';

import { RadioPage } from './radio.page';
import { HttpClientModule } from '@angular/common/http';
import { MisComponentesModule } from 'src/app/components/mis-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioPageRoutingModule,
    HttpClientModule,
    MisComponentesModule
  ],
  declarations: [RadioPage]
})
export class RadioPageModule {}
