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
  
  obj_feed = {
    nome: "William Balbino",
    data: "19 Agosto, 2017",
    descricao: "Criando a primeira App",
    qnt_likes: 10,
    qnt_comments: 14
  }

  lista_filmes = new Array<any>();
  obj = {}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private movieProvider: MovieProvider) {
  }
  
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

}
