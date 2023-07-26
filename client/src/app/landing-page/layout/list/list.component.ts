import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-layout',
  templateUrl: './list.component.html',
})
export class ListComponent {
  lists: any;
  showMoreLimit: number = 6;
  constructor(private service: ApiService) {}
  ngOnInit(): void {
    this.service.getList().subscribe(
      (result) => {
        this.lists = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  icon = {
    star: faStar,
    search: faSearch,
  };
  showMore(): void {
    this.showMoreLimit += 6;
  }
}
