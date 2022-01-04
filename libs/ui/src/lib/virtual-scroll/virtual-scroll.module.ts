import { NgModule } from '@angular/core';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [ExperimentalScrollingModule, ScrollingModule, MatIconModule],
  declarations: [VirtualScrollComponent],
  exports: [VirtualScrollComponent],
})
export class VirtualScrollModule {}
