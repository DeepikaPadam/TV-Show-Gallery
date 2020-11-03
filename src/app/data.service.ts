import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public show_API = 'http://api.tvmaze.com/';

  constructor(private http: HttpClient) { }
  
  getShowsList() {
    return this.http.get(this.show_API + 'shows');
  }
  getShowDetails( name ) {
    return this.http.get(this.show_API + 'singlesearch/shows?q=' + name);
  }
  getSearchDetails( name ) {
    return this.http.get(this.show_API + 'search/shows?q=' + name);
  }
}
