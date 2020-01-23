import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TodayComponent } from './components/today/today.component';
import { FeedComponent } from './components/feed/feed.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReadLaterComponent } from './components/read-later/read-later.component';
import { FeedChannelComponent } from './components/feed-channel/feed-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TodayComponent,
    FeedComponent,
    ExploreComponent,
    ReadLaterComponent,
    FeedChannelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
