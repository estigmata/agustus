import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  constructor(private router: Router) {}

  go(url: string) {
    this.router.navigateByUrl(url);
  }
}
