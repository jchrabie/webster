import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PourquoiVenirComponent } from './pourquoi-venir.component';

const routes: Routes = [
  {
    path: '',
    component: PourquoiVenirComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PourquoiVenirRoutingModule {}
