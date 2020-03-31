import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FeedArticleComponent } from '../feed-article/feed-article.component';

@Component({
  selector: 'app-feed-article-snippet',
  templateUrl: './feed-article-snippet.component.html',
  styleUrls: ['./feed-article-snippet.component.scss']
})
export class FeedArticleSnippetComponent implements OnInit {

  @ViewChild('storyModal', {static: true}) storyModal: FeedArticleComponent;
  // @Input() story;
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
    publishedAt: '',
    pubDate: '',
    link: ''
  };

  constructor() { }

  ngOnInit() {
  }

  openModal(story: any) {
    this.story = story;
    this.storyModal.show();
  }

}
