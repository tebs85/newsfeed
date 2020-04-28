import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.component.html',
  styleUrls: ['./read-later.component.scss']
})
export class ReadLaterComponent implements OnInit {

  @ViewChild(ModalDirective, {static: true}) storyModal: ModalDirective;

  savedStories: any = [];
  story = {
    title: '',
    author: '',
    description: '',
    content: '',
    link: '',
    pubDate: '',
    read: false
  };

  constructor() { }

  ngOnInit() {
    this.loadLocalStorage();
    this.loadSavedStories();
  }

  formatDate(obj) {
    return obj.toString().replace(/,/g, '/');
  }

  loadSavedStories() {
    return this.savedStories;
  }

  loadLocalStorage() {
    this.savedStories = JSON.parse(localStorage.getItem('savedStories'));
  }

  saveStory(story: any) {
    this.savedStories.push(story);
    this.setLocalStorage();
    this.loadLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('savedStories', JSON.stringify(this.savedStories));
  }

  openModal(story: any) {
    story.read = true;
    this.story = story;
    const index = this.savedStories.findIndex(data => data.title === story.title);
    this.savedStories[index] = story;
    this.storyModal.show();
    this.setLocalStorage();
  }

}
