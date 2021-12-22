import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendlyComponent } from './calendly.component';
import { CalendlyModal } from './calendly-modal/calendly.modal';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [CalendlyComponent, CalendlyModal],
  exports: [CalendlyComponent],
  entryComponents: [CalendlyModal],
})
export class CalendlyModule {}
