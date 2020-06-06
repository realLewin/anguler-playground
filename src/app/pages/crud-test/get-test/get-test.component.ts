import { Component, OnInit } from '@angular/core';
import { CrudGetService } from 'src/app/core/services/crud-get.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-test',
  templateUrl: './get-test.component.html',
  styleUrls: ['./get-test.component.css'],
})
export class GetTestComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private getService: CrudGetService) {}

  ngOnInit(): void {
    this.items = this.getService.getName();
  }
}
