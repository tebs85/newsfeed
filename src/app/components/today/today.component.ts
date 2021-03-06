import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { NewsApiService } from '../../services/newsapi.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';

export enum KEY_CODE {
  ESCAPE = 27,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})

export class TodayComponent implements OnInit {
  @ViewChild('storyModal', { static: true }) public storyModal: ModalDirective;
  // @Input() modal;
  topStories: any[] = [];
  savedStories: any[] = [];
  isLoading = true;
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: false,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };
  channelIndex: number;
  storyIndex: number;
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
    publishedAt: '',
    pubDate: '',
    link: ''
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

  constructor(private newsApiFeed: NewsApiService, private feed: FeedService) { }


  saveStory(story: any) {
    const unreadStory = Object.assign(story, {read: false});
    this.savedStories.push(unreadStory);
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

  formatDate(obj) {
    return obj.toString().replace(/,/g, '/');
  }

  openModal(story: any, channelIndex: number, storyIndex: number) {
    this.channelIndex = channelIndex;
    this.storyIndex = storyIndex;
    this.story = story;
    this.storyModal.show();
  }

  loadTopStories() {
    const stories$: Observable<any> = this.feed.getStories(this.topStoriesChannels);
    stories$.subscribe(
      (data: any) => this.topStories = data.map(item => ({title: item.feed.title, items: item.items})),
      err => console.error(err),
      () => this.isLoading = false,
    );
  }

  loadSources(endPoint: string) {
    return this.newsApiFeed.getStories(endPoint)
    .subscribe((data: any) => {
      this.topStories.push(data.articles);
      this.isLoading = false;
    });
  }

  loadStories(endPoint: string) {
    return this.newsApiFeed.getStories(endPoint)
    .subscribe((data: any) => {
      this.topStories = data.articles;
      this.isLoading = false;
    });
  }

  hideModal() {
    this.storyModal.hide();
  }

  refresh() {
    this.loadTopStories();
    // this.loadStories('top-headlines');
  }

  loadNextStory() {
    window.alert('Next story');
  }

  loadPastStory() {
    window.alert('Past story');
  }

  @HostListener('keydown', ['$event'])
  public keyEvent(event): void {
    const storyLength = this.topStories[this.channelIndex].items.length;

    if (event.keyCode === KEY_CODE.ESCAPE) {
      this.hideModal();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (0 === this.storyIndex ) { return; }
      this.storyIndex = this.storyIndex - 1;
    }

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if ((storyLength - 1) === this.storyIndex ) { return; }
      this.storyIndex = this.storyIndex + 1;
    }

    const story = this.topStories[this.channelIndex].items[this.storyIndex];
    this.openModal(story, this.channelIndex, this.storyIndex);
  }
}
