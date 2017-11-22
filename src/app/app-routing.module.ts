import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { ListComponent } from './list/list.component';
import { PlaceComponent } from './place/place.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'list', component: ListComponent },
  { path: 'place', component: PlaceComponent },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
