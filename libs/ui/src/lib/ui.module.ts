import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { CalendlyModule } from './calendly';
import { VirtualScrollModule } from './virtual-scroll';

@NgModule({
  imports: [CommonModule, CalendlyModule, VirtualScrollModule],
  declarations: [ButtonComponent, FeedbacksComponent],
  exports: [ButtonComponent, FeedbacksComponent],
})
export class UiModule {}
