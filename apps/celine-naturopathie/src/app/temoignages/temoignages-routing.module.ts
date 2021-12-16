import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemoignagesComponent } from './temoignages.component';

const routes: Routes = [
  {
    path: '',
    component: TemoignagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemoignagesRoutingModule {}
