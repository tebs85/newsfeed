import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedService } from './services/feed.service';
import { ModalDirective } from 'angular-bootstrap-md';
import * as moment from 'moment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(ModalDirective, {static: true}) modal: ModalDirective;

  title = 'News Feed';
  news24: any = [];
  topStories: any = [];
  story = {
    title: 'Heading',
    author: 'Name Surname',
    description: 'Description will be here',
    content: 'Content will be here',
    link: '',
    pubDate: ''
  };


  topStoriesChannels = [
    { title: 'News24', url: 'http://feeds.news24.com/articles/news24/TopStories/rss'},
    { title: 'Mail & Guardian', url: 'https://mg.co.za/feeds'},
    { title: 'Sowetan Live', url: 'https://www.sowetanlive.co.za/rss/?publication=sowetan-live'},
    { title: 'The Citizen', url: 'https://citizen.co.za/feed'},
    { title: 'Daily Maverick', url: 'https://www.dailymaverick.co.za/rss'},
    { title: 'BusinessTech', url: 'https://businesstech.co.za/news/feed'},
    { title: 'TechCentral', url: 'https://techcentral.co.za/feed'},
    { title: 'MyBroadBand', url: 'https://mybroadband.co.za/news/feed'}
  ];

  news24Channels = [
    { title: 'Top Stories', url: 'http://feeds.news24.com/articles/news24/TopStories/rss'},
    { title: 'World', url: 'http://feeds.news24.com/articles/news24/World/rss'},
    { title: 'Africa', url: 'http://feeds.news24.com/articles/news24/Africa/rss'},
    { title: 'South World', url: 'http://feeds.news24.com/articles/news24/SouthAfrica/rss'},
    { title: 'Technology', url: 'http://feeds.news24.com/articles/fin24/tech/rss'},
    { title: 'Sport', url: 'http://feeds.24.com/articles/sport/featured/topstories/rss'},
    { title: 'Business', url: 'http://feeds.news24.com/articles/fin24/news/rss'},
    { title: 'Entertainment', url: 'http://feeds.news24.com/articles/channel/topstories/rss'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem('splashScreen', JSON.stringify({isLoaded: false}));
    const isLoading = JSON.parse(localStorage.getItem('splashScreen')).isLoaded;
    if (isLoading) {
      this.lauchSplashScreen();
    }
  }

  private lauchSplashScreen() {
    this.router.navigate(['/']);
  }

  getTopicStories(topic: string) {
    return this.news24.find(story => story.title === topic);
  }

}
