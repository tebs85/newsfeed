import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { NewsApiService } from '../../services/newsapi.service';
import { FeedArticleComponent } from '../feed/feed-article/feed-article.component';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

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
  isLoading = true;
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: false,
  };
  story = {
    source: {
      name: ''
    },
    title: '',
    author: '',
    description: '',
    content: '',
    url: '',
    urlToImage: '',
    publishedAt: ''
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

  constructor(private newsApifeed: NewsApiService, private feed: FeedService) { }


  saveStory(story: any) {
    this.savedStories.push(story);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('savedStories', JSON.stringify(this.savedStories));
  }

  ngOnInit() {
    // this.loadSources('sources');
    // this.loadStories('top-headlines');
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
    this.isLoading = false;
  }

  loadSources(endPoint: string) {
    return this.newsApifeed.getStories(endPoint).subscribe((data: any) => {
      this.topStories.push(data.articles);
      this.isLoading = false;
    });
  }

  loadStories(endPoint: string) {
    return this.newsApifeed.getStories(endPoint).subscribe((data: any) => {
      this.topStories = data.articles;
      this.isLoading = false;
    });
  }

  refresh() {
    this.loadStories('top-headlines');
  }

  loadNextStory() {
    window.alert('Next story');
  }

  loadPastStory() {
    window.alert('Past story');
  }

  @HostListener('keydown') keyEvent(event) {
    if (KEY_CODE.LEFT_ARROW === 37) {
      console.log(event);
    }

    if (KEY_CODE.RIGHT_ARROW === 39) {
      console.log(event);
    }
  }
}
