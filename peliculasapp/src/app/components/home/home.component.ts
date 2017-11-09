import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  top_movies:any[] = [];
  cartelera:any[] = [];
  movies_kids:any[] = [];

  constructor(public _ps:PeliculasService) {

    // se llama a 3 metodos del servicio que llenan 3 arreglos para luego mostrarlos en la galeria.
    this._ps.getPopulares().subscribe(data => {
      this.top_movies = data.results
    })

    this._ps.getCartelera().subscribe(data => {
      this.cartelera = data.results;
      console.log(this.cartelera)
    })

    this._ps.getMovieKids().subscribe(data => {
      this.movies_kids = data.results;
      console.log(this.movies_kids)
    })
  }

}
