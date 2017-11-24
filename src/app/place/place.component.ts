import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { PEOPLES } from './mock-list.people';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class PlaceComponent implements OnInit {
  allPeople = PEOPLES;

  constructor(private router: Router, config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {}

  go(url: string) {
    this.router.navigateByUrl(url);
  }
}
