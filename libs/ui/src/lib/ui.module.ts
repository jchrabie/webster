import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { CalendlyModule } from './calendly';

@NgModule({
  imports: [CommonModule, CalendlyModule],
  declarations: [ButtonComponent, FeedbacksComponent],
  exports: [ButtonComponent, FeedbacksComponent],
})
export class UiModule {}
