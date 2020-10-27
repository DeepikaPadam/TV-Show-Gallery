import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getShowsList() {
    return this.http.get('http://api.tvmaze.com/shows');
  }
  getShowDetails( name ) {
    return this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + name);
  }
}
