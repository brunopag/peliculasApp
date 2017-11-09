import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {

  pelicula:any;

  constructor(private route:ActivatedRoute, public _ps:PeliculasService) {
    route.params.subscribe(parametros => {
        console.log(parametros['id']);
        this._ps.getMovie(parametros['id']).subscribe(data =>{
          this.pelicula = data;
          console.log(this.pelicula)
        })
    })
  }

}
