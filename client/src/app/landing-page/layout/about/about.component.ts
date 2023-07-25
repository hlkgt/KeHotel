import { Component } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about-layout',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  faArrowDown = faArrowDown;
}
