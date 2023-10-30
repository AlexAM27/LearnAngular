import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {

  error = new Subject<string>();

  url = 'https://angular-complete-guide-80d4d-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}


  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http.post<{name: string}>(`${this.url}posts.json`, postData)
    .subscribe({
      next: data => console.log(data),
      error: err => this.error.next(err.message)
    });
  }

  fetchPost() {
    return this.http.get<{[key: string]: Post}>(`${this.url}posts.json`, {
      headers: new HttpHeaders({'Custom-Header': 'Hello'}),
      params: new HttpParams().set('print', 'pretty')
    })
    .pipe(
      map((data) => {
      const array: Post[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          array.push({...data[key], id: key});
        }
      }
      return array;
      }),
      catchError( errorRes => {
        return throwError(errorRes);
      })    
    );
  }

  deletePosts() {
    return this.http.delete(`${this.url}posts.json`);
  }
}