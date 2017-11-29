
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
import { IntroPageModule } from './../pages/intro/intro.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FeedPageModule} from '../pages/feed/feed.module';
import { MovieProvider } from '../providers/movie/movie';
import { Facebook } from  '@ionic-native/facebook';



  var config = {
    apiKey: "AIzaSyAKDtSyRiiJegcnJ4hGkMdZUS3zeD3-iqI",
    authDomain: "app-movies-bc91d.firebaseapp.com",
    databaseURL: "https://app-movies-bc91d.firebaseio.com",
    projectId: "app-movies-bc91d",
    storageBucket: "",
    messagingSenderId: "756535986479"
  };
  


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule, 
    IntroPageModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    AngularFireAuth,
    Facebook
  ]
})
export class AppModule {}
