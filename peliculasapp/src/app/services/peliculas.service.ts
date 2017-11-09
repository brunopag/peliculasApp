import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = "6e45d078f4210285f78b3204846e31d8";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getCartelera(){

    let fecDesde = new Date();
    let fecHasta = new Date();

    fecHasta.setDate( fecHasta.getDate() + 7 );

    let desdeStr = fecDesde.getFullYear() + '-' + fecDesde.getMonth() + '-' + fecDesde.getDate();
    let hastaStr = fecHasta.getFullYear() + '-' + fecHasta.getMonth() + '-' + fecHasta.getDate();

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getMovieKids(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());

  }

  getMovie(id:string){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
