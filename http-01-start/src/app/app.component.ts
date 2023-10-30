import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false;
  errorMessage = null;
  private errorSub: Subscription;

  constructor(
    private postService: PostsService
  ) {}
  

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(err => this.errorMessage = err);

    this.isFetching = true;
    this.postService.fetchPost().subscribe({
     next: (posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
     },
     error: (error) => {
      this.isFetching = false;
      this.errorMessage = error.message;
     }
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe({
     next: (posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
     },
     error: (error) => {
      this.isFetching = false;
      this.errorMessage = error.message;
     }
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.errorMessage = null;
  }
}
