import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { config } from '../configs/server.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  server: string = config.server;

  constructor(private http: HttpClient) {}

  sendPost(post: Post) {
    return this.http.post(this.server, post);
  }
}
