import { Component } from '@angular/core';

// Different component selector;
@Component({
  selector: 'app-server',
  // The attribute selector:
  // selector: '[app-server]',
  // The class selector:
  // selector: '.app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  isExist: boolean = true;
  isAllowServer = false;
  number: number = 77;
  serverStatus: String = 'no server aviliable.';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.isAllowServer = !this.isAllowServer;
    }, 2000);
  }
  getNumber(): number {
    return this.number;
  }
  onCreateServer() {
    this.serverStatus = 'new server created!';
  }
}
