import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = 'https://angular-complete-guide-80d4d-default-rtdb.europe-west1.firebasedatabase.app/';

  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(posts => {
      this.loadedPosts = posts;
    });
    this.isFetching = false;
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(posts => {
      this.loadedPosts = posts;
    });
    this.isFetching = false;
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
