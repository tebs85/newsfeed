import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.component.html',
  styleUrls: ['./read-later.component.scss']
})
export class ReadLaterComponent implements OnInit {

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

  ngOnInit() {
    this.loadLocalStorage();
    this.loadSavedStories();
  }

  loadSavedStories() {
    return this.savedStories;
  }

  loadLocalStorage() {
    this.savedStories = JSON.parse(localStorage.getItem('savedStories'));
  }

  openModal(story: any) {
    this.story = story;
    this.modal.show();
  }

}
