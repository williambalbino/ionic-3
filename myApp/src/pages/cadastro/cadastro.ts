import { LoginPage } from './../login/login';
import { Usuario } from './../../model/usuario';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  usuario = {} as Usuario;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
  }

  async cadastrar(usuario: Usuario){
    await this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(t => {
        alert('Usuario criado com sucesso!');
      })
      .catch(c => {
        alert('Erro!');
      })
    this.navCtrl.push(LoginPage);
  }  
  
}
