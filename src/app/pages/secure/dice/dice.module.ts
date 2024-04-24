import { ChartsPageRoutingModule } from './dice-routing.module';
import { CommonModule } from '@angular/common';
import { DicePage } from './dice.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';

// NgCharts


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsPageRoutingModule,
    NgChartsModule
  ],
  declarations: [DicePage]
})
export class DicePageModule {}
