import { Component } from '@angular/core';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'list-layout',
  templateUrl: './list.component.html',
})
export class ListComponent {
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
    {
      title: 'Hotel SukaSuka',
      deskripsi: 'BerAC dan nyaman untuk keluarga',
      price: '300.000',
      rate: '5',
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
      rate: '1',
    },
  ];
  icon = 
    {
      star: faStar,
      search: faSearch,
    };
}
