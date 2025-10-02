import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlApi = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient){}

  getPost(): Observable<post[]> {

    return this.httpClient.get<post>(this.urlApi);

  }
  
}
