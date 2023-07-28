import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'client-layout',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  clients: any;
  constructor(private service: ApiService) {}
  ngOnInit(): void {
    this.service.getClient().subscribe(
      (result) => {
        this.clients = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
