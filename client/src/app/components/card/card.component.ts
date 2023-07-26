import { Component, Input } from '@angular/core';
import { faPencil, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class AppCard {
  @Input() list: any;
  icon = {
    pencil: faPencil,
    money: faMoneyBill,
  };
}
