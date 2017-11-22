import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.css']
})
export class CommentariesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(url: string) {
    this.router.navigateByUrl(url);
  }

}
