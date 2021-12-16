import { Component, Input } from '@angular/core';
import { Link } from '@webster/model';

@Component({
  selector: 'naturo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() links: Link[] = [];
}
