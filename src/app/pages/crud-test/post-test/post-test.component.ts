import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudData as User } from 'src/app/core/model/crud-data';
import { CrudPostService } from 'src/app/core/services/crud-post.service';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.css'],
})
export class PostTestComponent implements OnInit {
  // user: Observable<User>;
  value1: string = '';
  value2: string = '';
  value3: string = '';
  user: User = {
    name: 'really',
  };
  constructor(private post: CrudPostService) {}

  ngOnInit(): void {}

  handlePost() {
    this.post.updateUser(this.user);
  }
  uploadFile(event: any) {}
  handleKeyup1(event: KeyboardEvent) {
    this.value1 += (event.target as HTMLInputElement).value + ' | ';
  }
  handleKeyup2(value: string) {
    this.value2 += value + ' | ';
  }
  handleOnenter(value: string) {
    this.value3 = value;
  }
}
