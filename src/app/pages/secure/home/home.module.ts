import { CommonModule } from '@angular/common';
import { DicePage } from '../dice/dice.page';
import { DicePageModule } from '../dice/dice.module';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, DicePage]
})
export class HomePageModule {}
