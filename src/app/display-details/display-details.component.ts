import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  public details;
  public showName;
  public name;
  constructor( private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          this.showName = params.name;
          this.getDetails( this.showName );
        },
      );
  }

  getDetails(name) {
    this.name = name;
    this.dataService.getShowDetails( name )
      .subscribe(resp => {
        this.details = resp;
      });
  }

}
