import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../core/models/post.model';
import { PostService } from '../core/services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  postForm: FormGroup;
  post: Post = {
    title: 'default',
    content: 'default',
  };

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  send() {
    this.post.title = this.postForm.get('title').value;
    this.post.content = this.postForm.get('content').value;
    this.postService
      .sendPost(this.post)
      .subscribe((result) => console.log(result));
  }
  log() {
    console.log(
      `Your title: ${this.postForm.get('title').value},and your content is: ${
        this.postForm.get('content').value
      }`
    );
  }
  fetch() {}
  clear() {}
}
