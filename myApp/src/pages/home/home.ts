import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  filmes: Observable<any[]>;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase,
     private afAuth: AngularFireAuth) {
       afAuth.authState.subscribe( usuario => {
         var path = '/movies/' + usuario.uid;
         this.filmes = db.list(path).valueChanges();
       })
      // var usuario = this.afAuth.auth.currentUser.uid;
      // this.filmes = db.list('movies' + usuario);
  }

  remover(filme){
      
  }

}
