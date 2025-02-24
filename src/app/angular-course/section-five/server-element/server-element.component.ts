import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // You can get it a alias name use @Input('aliasName')
  @Input() element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
