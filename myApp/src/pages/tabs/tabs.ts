import { FeedPage } from './../feed/feed';
import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  tab1Root = FeedPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
