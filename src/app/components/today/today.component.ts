import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { FeedArticleComponent } from '../feed-article/feed-article.component';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  @ViewChild('storyModal', {static: true}) storyModal: FeedArticleComponent;
  @Input() modal;
  topStories: any = [];
  savedStories: any = [];
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: false,
  };
  story = {
    title: '',
    author: '',
    description: '',
    content: '',
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

  constructor(private feed: FeedService) { }


  saveStory(story: any) {
    this.savedStories.push(story);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('savedStories', JSON.stringify(this.savedStories));
  }

  ngOnInit() {
    this.loadTopStories();
  }

  openModal(story: any) {
    this.story = story;
    this.storyModal.show();
  }

  loadTopStories() {
    this.topStoriesChannels.forEach(story => {
      return this.feed.getFeedContent(story.url)
      .subscribe((data: any) => {
        this.topStories.push({title: story.title, items: data.items});
      });
    });
  }

  refresh() {
    this.loadTopStories();
  }
}
