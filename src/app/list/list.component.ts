import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PLACES } from './mock-list.places';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  myPlaces = PLACES;

  constructor(private router: Router) {}

  ngOnInit() {}

  go(url: string) {
    this.router.navigateByUrl(url);
  }
}
