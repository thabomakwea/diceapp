import { RouterModule, Routes } from '@angular/router';

import { DicePage } from './dice.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsPageRoutingModule {}
