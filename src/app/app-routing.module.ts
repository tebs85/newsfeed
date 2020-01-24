import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { ReadLaterComponent } from './components/read-later/read-later.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedChannelComponent } from './components/feed/feed-channel/feed-channel.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SplashScreenComponent } from './components/app-state/splash-screen/splash-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { SettingsComponent } from './components/account/settings/settings.component';

const appRoutes: Routes = [{
    path: '',
    component: SplashScreenComponent
  },
  {
    path: 'today',
    component: TodayComponent
  },
  {
    path: 'saved',
    component: ReadLaterComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'feed/:feedId',
    component: FeedChannelComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'account',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
