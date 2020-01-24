import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public userFeed = {
    customizable: true,
    feeds: [
      {
        id: 'feed/http://feeds.feedburner.com/Techcrunch',
        feedId: 'feed/http://feeds.feedburner.com/Techcrunch',
        title: 'TechCrunch',
        updated: 1579763111557,
        velocity: 150.8,
        topics: [
          'tech'
        ],
        subscribers: 1097338,
        website: 'https://techcrunch.com',
        partial: false,
        estimatedEngagement: 210,
        iconUrl: 'https://storage.googleapis.com/site-assets/Xne8uW_IUiZhV1EuO2ZMzIrc2Ak6NlhGjboZ-Yk0rJ8_sicon-16a7b3df2e3',
        visualUrl: 'https://storage.googleapis.com/site-assets/Xne8uW_IUiZhV1EuO2ZMzIrc2Ak6NlhGjboZ-Yk0rJ8_svisual-16a7b3df2e3',
        contentType: 'article',
        language: 'en',
        description: 'TechCrunch is a group-edited blog that profiles the companies, products and events defining and transforming the new web.'
      },
      {
        id: 'feed/http://www.engadget.com/rss-full.xml',
        feedId: 'feed/http://www.engadget.com/rss-full.xml',
        title: 'Engadget',
        updated: 1579773064126,
        velocity: 196.5,
        topics: [
          'tech',
          'gaming'
        ],
        subscribers: 1610029,
        website: 'http://www.engadget.com',
        partial: false,
        estimatedEngagement: 604,
        coverUrl: 'https://storage.googleapis.com/site-assets/4i-1vhCwmRRLfmB7ypTnMh-ZKSvsz6Rgf0lfR0WWb0w_cover-15f30403da7',
        iconUrl: 'http://storage.googleapis.com/site-assets/4i-1vhCwmRRLfmB7ypTnMh-ZKSvsz6Rgf0lfR0WWb0w_icon-1541543fe44',
        visualUrl: 'http://storage.googleapis.com/site-assets/4i-1vhCwmRRLfmB7ypTnMh-ZKSvsz6Rgf0lfR0WWb0w_visual-1541543fe44',
        numReadEntriesPastMonth: 1,
        numLongReadEntriesPastMonth: 1,
        totalReadingTimePastMonth: 1702894,
        numTaggedEntriesPastMonth: 0,
        contentType: 'article',
        language: 'en',
        description: 'Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.',
        coverColor: '000000',
        logo: 'http://storage.googleapis.com/test-site-assets/4i-1vhCwmRRLfmB7ypTnMh-ZKSvsz6Rgf0lfR0WWb0w_ologo-14f041f5bd8',
        relatedLayout: 'card',
        relatedTarget: 'browser'
      },
      {
        id: 'feed/http://www.technologyreview.com/rss/rss.aspx',
        feedId: 'feed/http://www.technologyreview.com/rss/rss.aspx',
        title: 'New on MIT Technology Review',
        updated: 1579718450845,
        velocity: 20.5,
        topics: [
          'tech',
          'science'
        ],
        subscribers: 80233,
        website: 'https://www.technologyreview.com/',
        partial: true,
        estimatedEngagement: 2755,
        coverUrl: 'https://storage.googleapis.com/site-assets/Uj-CdaagUWK3MlmzxLAxgNcqNGJXiYXjmrsBNefGR2c_cover-16f4ae85ccf',
        iconUrl: 'https://storage.googleapis.com/site-assets/Uj-CdaagUWK3MlmzxLAxgNcqNGJXiYXjmrsBNefGR2c_icon-167a4c97d71',
        visualUrl: 'https://storage.googleapis.com/site-assets/Uj-CdaagUWK3MlmzxLAxgNcqNGJXiYXjmrsBNefGR2c_visual-167a4c97d71',
        contentType: 'article',
        language: 'en',
        description: 'The mission of MIT Technology Review is to bring about better-informed and more conscious decisions about technology through authoritative, influential, and trustworthy journalism.',
        coverColor: '131516'
      },
      {
        id: 'feed/http://feeds2.feedburner.com/thenextweb',
        feedId: 'feed/http://feeds2.feedburner.com/thenextweb',
        title: 'The Next Web',
        updated: 1579774699962,
        velocity: 90.1,
        topics: [
          'tech'
        ],
        subscribers: 252624,
        website: 'https://thenextweb.com',
        partial: true,
        estimatedEngagement: 140,
        coverUrl: 'https://storage.googleapis.com/site-assets/0VTnUfX894TcY5TA_oMFDbEY1bDrlajzsn67Jr80r8M_cover-16defc4f093',
        iconUrl: 'https://storage.googleapis.com/site-assets/0VTnUfX894TcY5TA_oMFDbEY1bDrlajzsn67Jr80r8M_icon-1645d1d60af',
        visualUrl: 'https://storage.googleapis.com/site-assets/0VTnUfX894TcY5TA_oMFDbEY1bDrlajzsn67Jr80r8M_visual-1645d1d60af',
        numReadEntriesPastMonth: 1,
        numLongReadEntriesPastMonth: 1,
        totalReadingTimePastMonth: 195174,
        numTaggedEntriesPastMonth: 0,
        contentType: 'article',
        language: 'en',
        description: 'Original and proudly opinionated perspectives for Generation T.',
        coverColor: 'FF3C1F'
      },
      {
        id: 'feed/http://feeds.mashable.com/Mashable',
        feedId: 'feed/http://feeds.mashable.com/Mashable',
        title: 'Mashable',
        updated: 1579773735774,
        velocity: 224.2,
        topics: [
          'tech',
          'marketing'
        ],
        subscribers: 880016,
        website: 'https://mashable.com/?utm_campaign=Mash-Prod-RSS-Feedburner-All-Partial&utm_cid=Mash-Prod-RSS-Feedburner-All-Partial',
        partial: true,
        estimatedEngagement: 391,
        coverUrl: 'https://storage.googleapis.com/site-assets/MMCA_259PVQgzewWTRJNcvw_8XXvgI6S68GWeJF7z_0_cover-16e0c497e71',
        iconUrl: 'https://storage.googleapis.com/site-assets/MMCA_259PVQgzewWTRJNcvw_8XXvgI6S68GWeJF7z_0_icon-16e0c497e71',
        visualUrl: 'https://storage.googleapis.com/site-assets/MMCA_259PVQgzewWTRJNcvw_8XXvgI6S68GWeJF7z_0_visual-16e0c497e71',
        contentType: 'article',
        language: 'en',
        description: 'Leading source for news, information & resources for the Connected Generation. ',
        coverColor: '00AEEF',
        analyticsEngine: 'GoogleAnalytics',
        analyticsId: 'UA-64690007-1',
        logo: 'http://storage.googleapis.com/test-site-assets/MMCA_259PVQgzewWTRJNcvw_8XXvgI6S68GWeJF7z_0_ologo-14fe2e5a1bc'
      },
      {
        id: 'feed/http://www.nytimes.com/services/xml/rss/nyt/Technology.xml',
        feedId: 'feed/http://www.nytimes.com/services/xml/rss/nyt/Technology.xml',
        title: 'NYT > Technology',
        updated: 1579767845194,
        velocity: 24.6,
        topics: [
          'tech',
          'news',
          'nyt'
        ],
        subscribers: 60507,
        website: 'https://www.nytimes.com/section/technology?emc=rss&partner=rss',
        partial: true,
        estimatedEngagement: 6118,
        coverUrl: 'https://storage.googleapis.com/site-assets/3wA6rcnoxqCLEas6dlQji0lf4BMSCZElo5-isELU97Q_cover-16f927d1c7e',
        iconUrl: 'https://storage.googleapis.com/site-assets/3wA6rcnoxqCLEas6dlQji0lf4BMSCZElo5-isELU97Q_icon-16aedf11e65',
        visualUrl: 'https://storage.googleapis.com/site-assets/3wA6rcnoxqCLEas6dlQji0lf4BMSCZElo5-isELU97Q_visual-16aedf11e65',
        contentType: 'article',
        language: 'en',
        description: 'Exploring the business, culture and impact of the technology industry with reporting on the biggest internet companies to the newest startups.',
        coverColor: '131516'
      },
      {
        id: 'feed/http://feeds.gawker.com/gizmodo/full',
        feedId: 'feed/http://feeds.gawker.com/gizmodo/full',
        title: 'Gizmodo',
        updated: 1579768929927,
        velocity: 170.7,
        topics: [
          'tech'
        ],
        subscribers: 791318,
        website: 'https://gizmodo.com',
        partial: true,
        estimatedEngagement: 3009,
        coverUrl: 'https://storage.googleapis.com/site-assets/YgTD2rF1XSAfR77lKtxrTwuR-azzbzQhUxfiRyg1u0w_cover-164884a631e',
        iconUrl: 'https://storage.googleapis.com/site-assets/YgTD2rF1XSAfR77lKtxrTwuR-azzbzQhUxfiRyg1u0w_icon-164884a631e',
        visualUrl: 'https://storage.googleapis.com/site-assets/YgTD2rF1XSAfR77lKtxrTwuR-azzbzQhUxfiRyg1u0w_visual-164884a631e',
        contentType: 'article',
        language: 'en',
        description: 'We come from the future',
        coverColor: 'EDF6F8'
      },
      {
        id: 'feed/http://www.theverge.com/rss/full.xml',
        feedId: 'feed/http://www.theverge.com/rss/full.xml',
        title: 'The Verge',
        updated: 1579773177702,
        velocity: 157.2,
        topics: [
          'tech'
        ],
        subscribers: 1169883,
        website: 'https://www.theverge.com/',
        partial: false,
        estimatedEngagement: 1382,
        coverUrl: 'https://storage.googleapis.com/site-assets/PSNTZO8gXFUe-cpCZyApw0vEKWPT4b14D6teBEocIAE_cover-16d64b2a086',
        iconUrl: 'https://storage.googleapis.com/site-assets/PSNTZO8gXFUe-cpCZyApw0vEKWPT4b14D6teBEocIAE_icon-15cd6b8692d',
        visualUrl: 'https://storage.googleapis.com/site-assets/PSNTZO8gXFUe-cpCZyApw0vEKWPT4b14D6teBEocIAE_visual-15cd6b8692d',
        contentType: 'article',
        language: 'en',
        description: 'Covering the intersection of technology, science, art, and culture.',
        coverColor: 'FFFFFF',
        logo: 'http://storage.googleapis.com/test-site-assets/PSNTZO8gXFUe-cpCZyApw0vEKWPT4b14D6teBEocIAE_ologo-14be62cd987',
        wordmark: 'http://storage.googleapis.com/test-site-assets/PSNTZO8gXFUe-cpCZyApw0vEKWPT4b14D6teBEocIAE_owordmark-1503a52ff7f',
        relatedLayout: 'card',
        relatedTarget: 'browser',
        accentColor: 'fa4b2a'
      },
      {
        id: 'feed/http://www.digitaltrends.com/feed/?key=f00edf6a58d2a8740e624dda919cab37',
        feedId: 'feed/http://www.digitaltrends.com/feed/?key=f00edf6a58d2a8740e624dda919cab37',
        title: 'Digital Trends',
        updated: 1579747097458,
        velocity: 168.5,
        topics: [
          'tech'
        ],
        subscribers: 213692,
        website: 'https://www.digitaltrends.com',
        partial: false,
        estimatedEngagement: 115,
        coverUrl: 'https://www.digitaltrends.com/wp-content/plugins/dt-feeds/assets/webfeeds/cover.png',
        iconUrl: 'https://www.digitaltrends.com/wp-content/plugins/dt-feeds/assets/webfeeds/cover-logo.png',
        visualUrl: 'https://www.digitaltrends.com/wp-content/plugins/dt-feeds/assets/webfeeds/cover-logo.png',
        numReadEntriesPastMonth: 2,
        numLongReadEntriesPastMonth: 2,
        totalReadingTimePastMonth: 13550,
        numTaggedEntriesPastMonth: 0,
        contentType: 'longform',
        language: 'en',
        description: 'Digital Trends is your home for technology news, CE product reviews, mobile app reviews and daily videos.',
        coverColor: '000000',
        analyticsEngine: 'GoogleAnalytics',
        analyticsId: 'UA-82208-8',
        wordmark: 'https://storage.googleapis.com/test-site-assets/4S5w_twtgsRKuOCEisNFMygR2kuy5oeH1-5XQCrN9mo_owordmark-15df129e946',
        accentColor: '0095DA'
      }
    ],
    label: 'Tech',
    created: 1579764368741,
    enterprise: false,
    numFeeds: 9,
    id: 'user/70f5ba38-b141-44c2-8128-96720fa6d807/category/408d5411-9682-481e-9f18-048e9a945723'
  };
  public checkModel: any = { left: true, middle: false, right: false };
  constructor() { }

  ngOnInit() {
  }

}
