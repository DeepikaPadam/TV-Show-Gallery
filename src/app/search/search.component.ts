import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchDetails: any;
  constructor( private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const showName = params.name;
        this.getSearchDetails( showName );
      },
    );
  }

  getSearchDetails(name) {
    this.dataService.getSearchDetails( name )
      .subscribe(resp => {
        this.searchDetails = resp;
      });
  }
}
