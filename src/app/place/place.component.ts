import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PEOPLES } from './mock-list.people';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  allPeople = PEOPLES;

  constructor(private router: Router) {}

  ngOnInit() {}

  go(url: string) {
    this.router.navigateByUrl(url);
  }
}
