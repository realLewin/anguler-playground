import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'test server', content: 'just for test' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onServerCreated(data: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent,
    });
  }
  onBlueprintServerCreated(data: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent,
    });
  }
}
