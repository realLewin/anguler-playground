import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-socket-test',
  templateUrl: './socket-test.component.html',
  styleUrls: ['./socket-test.component.css'],
})
export class SocketTestComponent implements OnInit {
  constructor(private socketService: SocketioService) {}

  ngOnInit(): void {
    this.socketService.setupSocketConnection();
  }
}
