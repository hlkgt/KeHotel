import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'popular-layout',
  templateUrl: './popular.component.html',
})
export class PopularComponent implements OnInit {
  lists: any;
  constructor(private servive: ApiService) {}
  ngOnInit(): void {
    this.servive.getPopular().subscribe(
      (result) => {
        this.lists = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
