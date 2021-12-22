import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CalendlyModule, UiModule } from '@webster/ui';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    CalendlyModule,
    UiModule,
  ],
  declarations: [HomeComponent, QuiSuisJeComponent],
  exports: [QuiSuisJeComponent],
})
export class HomeModule {}
