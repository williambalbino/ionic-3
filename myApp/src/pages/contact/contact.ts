import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {

  }

  logout(){
    this.afAuth.auth.signOut;
    this.navCtrl.setRoot(LoginPage);
  }


}
