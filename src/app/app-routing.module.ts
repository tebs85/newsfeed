import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { ReadLaterComponent } from './components/read-later/read-later.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedChannelComponent } from './components/feed-channel/feed-channel.component';
import { ExploreComponent } from './components/explore/explore.component';

const appRoutes: Routes = [{
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
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
