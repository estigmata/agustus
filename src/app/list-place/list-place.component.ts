import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PLACES } from './mock-list.places';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.css']
})
export class ListPlaceComponent implements OnInit {
  myPlaces = PLACES;

  constructor(private router: Router) {}

  ngOnInit() {}

  go(url: string) {
    this.router.navigateByUrl(url);
  }
}
