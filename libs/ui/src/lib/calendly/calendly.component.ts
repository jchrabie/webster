import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendlyModal } from './calendly-modal/calendly.modal';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { first } from 'rxjs';
import { CoerceBoolean } from '@webster/core';

@Component({
  selector: 'webster-calendly',
  templateUrl: './calendly.component.html',
  styleUrls: ['./calendly.component.scss'],
})
export class CalendlyComponent {
  @Input() calendlyUrl: string;
  @Input() @CoerceBoolean inline = false;
  @Input() color: 'primary' | 'accent' = 'primary';

  isExpanded = false;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  openDialog(): void {
    this.isExpanded = true;

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(first())
      .subscribe((state: BreakpointState) => {
        const dialogRef = this.dialog.open(CalendlyModal, {
          width: state.matches ? '100vw' : '60vw',
          maxWidth: state.matches ? '100vw' : '70vw',
          minWidth: '320px',
          data: { calendlyUrl: this.calendlyUrl },
        });

        dialogRef.afterClosed().subscribe((result) => {
          this.isExpanded = false;
        });
      });
  }
}
