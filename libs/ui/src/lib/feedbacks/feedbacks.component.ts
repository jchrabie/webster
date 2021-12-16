import {Component, Input} from '@angular/core';
import {Feedback} from "../models";

@Component({
  selector: 'webster-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {
  @Input() feedbacks: Feedback[]
}
