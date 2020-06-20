import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-get-route-info',
  templateUrl: './get-route-info.component.html',
  styleUrls: ['./get-route-info.component.css'],
})
export class GetRouteInfoComponent implements OnInit {
  itemName: string;
  name$: Observable<string>;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //get info without use Observable:
    this.itemName = this.route.snapshot.paramMap.get('name');
    //get info with use Observable:
    //confused:
    this.route.queryParams.subscribe((params) => {
      this.name$ = params['name'];
    });
    // confused:
    this.route.paramMap.pipe(
      switchMap((p) => {
        this.itemName = String(p.get('name'));
        return of(1);
      })
    );
  }

  getInfo() {
    console.log(this.itemName);
  }
}
