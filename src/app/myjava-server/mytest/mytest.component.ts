import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css'],
})
export class MytestComponent {
  message: any;

  constructor(private http: HttpClient) {}

  fetchMes() {
    this.http
      .get('http://localhost:7777')
      .subscribe((mes) => (this.message = mes));
  }

  logMes() {
    console.log(this.message);
  }
}
