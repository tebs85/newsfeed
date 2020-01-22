import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedService } from './services/feed.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(ModalDirective, {static: true}) modal: ModalDirective;
  
  title = 'News Feed';
  news24TopStories: any = [];
  news24World: any = [];
  news24Africa: any = [];
  news24SouthAfrica: any = [];
  news24Tech: any = [];
  news24Sport: any = [];
  news24Business: any = [];
  news24Entertainment: any = [];
  story = {
    title: 'Heading',
    description: 'Description will be here',
    content: 'Content will be here'
  }; 

  constructor(private feed: FeedService) { }

  ngOnInit() {
    this.loadStories();
  }

  openModal(story: any) {
    this.story = story;
    this.modal.show();
  }

  loadStories() {
    this.loadNews24TopStories();
    this.loadNews24World();
    this.loadNews24Africa();
    this.loadNews24SouthAfrica();
    this.loadNews24Tech();
    this.loadNews24Sport();
    this.loadNews24Business();
    this.loadNews24Entertainment();
  }

  loadNews24TopStories() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/news24/TopStories/rss')
    .subscribe((data: any) => {
      this.news24TopStories = data.items;
    })
  }
  
  loadNews24World() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/news24/World/rss')
    .subscribe((data: any) => {
      this.news24World = data.items;
    })
  }

  loadNews24Africa() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/news24/Africa/rss')
    .subscribe((data: any) => {
      this.news24Africa = data.items;
    })
  }

  loadNews24SouthAfrica() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/news24/SouthAfrica/rss')
    .subscribe((data: any) => {
      this.news24SouthAfrica = data.items;
    })
  }

  loadNews24Tech() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/fin24/tech/rss')
    .subscribe((data: any) => {
      this.news24Tech = data.items;
    })
  }

  loadNews24Sport() {
    return this.feed.getFeedContent('http://feeds.24.com/articles/sport/featured/topstories/rss')
    .subscribe((data: any) => {
      this.news24Sport = data.items;
    })
  }
  
  loadNews24Business() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/fin24/news/rss')
    .subscribe((data: any) => {
      this.news24Business = data.items;
    })
  }

  loadNews24Entertainment() {
    return this.feed.getFeedContent('http://feeds.news24.com/articles/channel/topstories/rss')
    .subscribe((data: any) => {
      this.news24Entertainment = data.items;
    })
  }

}
