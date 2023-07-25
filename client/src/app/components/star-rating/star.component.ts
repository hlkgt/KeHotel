import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
})
export class AppStar {
  @Input() rate!: number;
  faStar = faStar;
}
