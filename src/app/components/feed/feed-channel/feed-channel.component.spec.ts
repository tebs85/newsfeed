import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedChannelComponent } from './feed-channel.component';

describe('FeedChannelComponent', () => {
  let component: FeedChannelComponent;
  let fixture: ComponentFixture<FeedChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
