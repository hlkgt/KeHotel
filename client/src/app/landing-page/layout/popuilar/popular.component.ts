import { Component } from '@angular/core';
@Component({
  selector: 'popular-layout',
  templateUrl: './popular.component.html',
})
export class PopularComponent {
  lists: any[] = [
    {
      title: 'Hotel SukaSuka',
      deskripsi: 'BerAC dan nyaman untuk keluarga',
      price: '300.000',
      rate: '3',
    },
    {
      title: 'Hotel SukaSuka',
      deskripsi: 'BerAC dan nyaman untuk keluarga',
      price: '300.000',
      rate: '4',
    },
    {
      title: 'Hotel SukaSuka',
      deskripsi: 'BerAC dan nyaman untuk keluarga',
      price: '300.000',
      rate: '2',
    },
  ];
}
