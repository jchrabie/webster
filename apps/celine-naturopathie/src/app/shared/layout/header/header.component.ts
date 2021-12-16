import { Component, Input } from '@angular/core';
import { Link } from '@webster/model';

@Component({
  selector: 'naturo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() links: Link[] = [];
}
