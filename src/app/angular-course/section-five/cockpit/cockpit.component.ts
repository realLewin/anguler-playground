import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // Use alias;
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // Use @ViewChild() to access the template & DOM;
  @ViewChild('serverName') serverName: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(content: HTMLInputElement) {
    console.log(content); // This log the entire html element;
    console.log(this.serverName); // this is type of ElementRef;
    this.serverCreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: content.value,
    });
  }

  onAddBlueprint(content: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: content.value,
    });
  }
}
