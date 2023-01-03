import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../shared/service/analytics.service';
import { Feedback } from '@webster/ui/models';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = true;

  feedbacks: Feedback[] = [
    {
      comment:
        'Joël is a great front end developer with great technical skills which include UX skills and of course user accessibility best practices. Thanks for your job at Zeenea !!',
      sender: {
        name: 'Nicolas Boisnic',
        img: 'assets/boisnic.jpeg',
        role: 'Senior Product Manager chez Zeenea',
        linkedIn: 'https://www.linkedin.com/in/nicolasboisnic/',
      },
    },
    {
      comment:
        'Je recommande sans hésiter Joël pour son expertise Angular et ses compétences en CSS. Cela a été un réel plaisir de travailler avec lui.',
      sender: {
        name: 'Guillaume Deleplace',
        img: 'assets/deleplace.jpeg',
        role: 'Scrum Master chez Cbp',
        linkedIn: 'https://www.linkedin.com/in/gdeleplace/',
      },
    },
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
    of(false)
      .pipe(delay(6000))
      .subscribe((loading) => (this.isLoading = loading));
  }

  hireClick() {
    this.analyticsService.emit('click', 'home', 'hiring', 'Click');
  }
}
