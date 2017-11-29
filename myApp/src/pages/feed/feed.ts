import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from './../../model/usuario';
import { AngularFireDatabase } from 'angularfire2/database';
import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  
    lista_filmes = new Array<any>();
  obj = {}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private movieProvider: MovieProvider, private angularFire: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
  }
  
  usuario = {} as Usuario;

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const obj_retorno = JSON.parse(response._body);
        this.lista_filmes = obj_retorno.results;
        console.log(obj_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

  async salvar(filme){
    var usuario = this.afAuth.auth.currentUser.uid;
    this.angularFire.list('/movies/' + usuario).push(filme)
    .then(t => {
      alert('Filme Salvo!');
    })
  }

}
