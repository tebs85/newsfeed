import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TodayComponent } from './components/today/today.component';
import { FeedComponent } from './components/feed/feed.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReadLaterComponent } from './components/read-later/read-later.component';
import { FeedChannelComponent } from './components/feed/feed-channel/feed-channel.component';
import { FeedArticleComponent } from './components/feed/feed-article/feed-article.component';
import { SplashScreenComponent } from './components/app-state/splash-screen/splash-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmptyStateComponent } from './components/app-state/empty-state/empty-state.component';
import { LoadingStateComponent } from './components/app-state/loading-state/loading-state.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { SettingsComponent } from './components/account/settings/settings.component';
import { FeedArticleSnippetComponent } from './components/feed/feed-article-snippet/feed-article-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TodayComponent,
    FeedComponent,
    ExploreComponent,
    ReadLaterComponent,
    FeedChannelComponent,
    FeedArticleComponent,
    SplashScreenComponent,
    PageNotFoundComponent,
    EmptyStateComponent,
    LoadingStateComponent,
    ProfileComponent,
    SettingsComponent,
    FeedArticleSnippetComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SlickCarouselModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FeedArticleComponent]
})
export class AppModule { }
