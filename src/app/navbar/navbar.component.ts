import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  public showName: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  search() {
    if (this.showName !== undefined) {
      this.router.navigate(['search'], {queryParams: {name: this.showName}});
    }
  }

}
