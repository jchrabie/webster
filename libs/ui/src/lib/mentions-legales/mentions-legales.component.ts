import { Component, Input } from '@angular/core';

@Component({
  selector: 'webster-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.scss'],
})
export class MentionsLegalesComponent {
  @Input() name: string;
  @Input() lastname: string;
  @Input() url: string;
  @Input() creator = {
    url: 'https://webster-dev.fr',
    mail: 'hello@webster-dev.fr',
    name: 'Joël CHRABIE',
  };
}
