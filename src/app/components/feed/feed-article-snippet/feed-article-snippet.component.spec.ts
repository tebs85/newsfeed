import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedArticleSnippetComponent } from './feed-article-snippet.component';

describe('FeedArticleSnippetComponent', () => {
  let component: FeedArticleSnippetComponent;
  let fixture: ComponentFixture<FeedArticleSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedArticleSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedArticleSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
