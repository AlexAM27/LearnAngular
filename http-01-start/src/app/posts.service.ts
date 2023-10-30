import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostsService {

  url = 'https://angular-complete-guide-80d4d-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}


  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http.post<{name: string}>(`${this.url}posts.json`, postData).subscribe(data => console.log(data));
  }

  fetchPost() {
    return this.http.get<{[key: string]: Post}>(`${this.url}posts.json`)
    .pipe(
      map((data) => {
      const array: Post[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          array.push({...data[key], id: key});
        }
      }
      return array;
      })    
    );
  }

  deletePosts() {
    return this.http.delete(`${this.url}posts.json`);
  }
}