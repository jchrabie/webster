import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

declare global {
  interface Window {
    Calendly: any;
  }
}

@Component({
  selector: 'webster-calendly-modal',
  templateUrl: './calendly.modal.html',
  styleUrls: ['./calendly.modal.scss'],
})
export class CalendlyModal implements AfterViewInit {
  @ViewChild('container') container: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<CalendlyModal>,
    @Inject(MAT_DIALOG_DATA) public data: { calendlyUrl: string }
  ) {}

  ngAfterViewInit(): void {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/' + this.data.calendlyUrl,
      parentElement: this.container.nativeElement,
    });
  }
}
