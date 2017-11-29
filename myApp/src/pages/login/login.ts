import { Usuario } from './../../model/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario = {} as Usuario;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
  }
  
  async login(usuario: Usuario){
    this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha)
    .then(t => {
      console.log('logou');
      this.navCtrl.push(TabsPage);
    })
    .catch(c => {
      alert('Usuario Invalido!');
    })
  }
}
