import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-article-snippet',
  templateUrl: './feed-article-snippet.component.html',
  styleUrls: ['./feed-article-snippet.component.scss']
})
export class FeedArticleSnippetComponent implements OnInit {

  @Input() story;
  
  constructor() { }

  ngOnInit() {
  }

}
