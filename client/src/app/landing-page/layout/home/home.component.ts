import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-layout',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  links: any[] = [
    {
      name: 'home',
      path: '/home',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'popular',
      path: '/popular',
    },
    {
      name: 'list',
      path: '/list',
    },
    {
      name: 'client',
      path: '/client',
    },
    {
      name: 'myOrders',
      path: '/myorder',
    },
  ];

  faArrowRight = faArrowRight;
}
