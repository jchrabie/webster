import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
})
export class CardContentComponent implements OnInit {
  @Input() public cardContent: string | undefined;

  constructor() {}

  ngOnInit() {}
}
