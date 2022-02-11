import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YemekdetayPage } from './yemekdetay.page';

const routes: Routes = [
  {
    path: '',
    component: YemekdetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YemekdetayPageRoutingModule {}
