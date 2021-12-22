import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

import { AnalyticsService } from '../shared/service/analytics.service';
import { Feedback } from '@webster/ui/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  feedbacks: Feedback[] = [
    {
      comment:
        'Une vraie compétence en dev front, que ce soit pour mettre en œuvre une architecture Angular modulaire et bien pensée que pour évangéliser l’équipe sur la sémantique html et les bonnes pratiques css. Ravi de t’avoir eu dans l’équipe Joël.',
      sender: {
        name: 'Reynald Jégo',
        img: 'assets/jego.jpg',
        role: 'Responsable de département chez Cbp',
        linkedIn: 'https://www.linkedin.com/in/rjego/',
      },
    },
    {
      comment:
        'Je recommande Joël pour tout vos développements Angular. Un experience solide et de bonnes pratiques font de lui un allié idéal pour vos équipes.',
      sender: {
        name: 'RETORE Benjamin',
        img: 'assets/retore.jpg',
        role: 'Chef Architecte et Responsable produit DWA/DWH chez DSIA',
        linkedIn: 'https://www.linkedin.com/in/retore-benjamin-457a2a89/',
      },
    },
  ];
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    const options = {
      strings: ['Angular', 'Web', 'Front', 'Green', 'Fun'],
      typeSpeed: 200,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    new Typed('.typing-element', options);
  }

  hireClick() {
    this.analyticsService.emit('click', 'home', 'hiring', 'Click');
  }
}
