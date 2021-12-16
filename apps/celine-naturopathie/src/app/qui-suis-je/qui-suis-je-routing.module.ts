import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiSuisJeComponent } from './qui-suis-je.component';

const routes: Routes = [
  {
    path: '',
    component: QuiSuisJeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuiSuisJeRoutingModule {}
