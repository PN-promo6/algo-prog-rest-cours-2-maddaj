import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { EventsPreviewComponent } from './events-preview/events-preview.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    EventsListComponent,
    UserPreviewComponent,
    EventsPreviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
