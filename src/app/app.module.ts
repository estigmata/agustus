import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ListPlaceComponent } from './list-place/list-place.component';
import { PlaceComponent } from './place/place.component';
import { CommentariesComponent } from './commentaries/commentaries.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    ListPlaceComponent,
    PlaceComponent,
    CommentariesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
