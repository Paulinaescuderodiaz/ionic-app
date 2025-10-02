import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getPost(){

    return this.httpClient.get<any>(this.urlApi);

  }
  
}
