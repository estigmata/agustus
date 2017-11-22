import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { ListPlaceComponent } from './list-place/list-place.component';
import { PlaceComponent } from './place/place.component';
import { CommentariesComponent } from './commentaries/commentaries.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'list', component: ListPlaceComponent },
  { path: 'place', component: PlaceComponent },
  { path: 'commentaries', component: CommentariesComponent },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
