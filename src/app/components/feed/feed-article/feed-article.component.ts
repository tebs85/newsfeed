import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-feed-article',
  templateUrl: './feed-article.component.html',
  styleUrls: ['./feed-article.component.scss']
})
export class FeedArticleComponent {

  @ViewChild(ModalDirective, {static: true}) modal: ModalDirective;

  savedStories: any = [];
  story = {
    title: '',
    author: '',
    description: '',
    content: '',
    link: '',
    pubDate: ''
  };

  constructor() { }

  saveStory(story: any) {
    this.savedStories.push(story);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('savedStories', JSON.stringify(this.savedStories));
  }

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
