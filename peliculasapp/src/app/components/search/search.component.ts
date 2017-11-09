import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  buscar:string = "";
  peliculas_resultado:any[] = [];

  constructor(private route:ActivatedRoute,
              public _ps:PeliculasService) {
    route.params.subscribe(parametros => {
      if(parametros['texto'] != ""){
        console.log(parametros['texto']);
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    })
  }

  buscarPelicula(){
    this._ps.buscarPelicula(this.buscar).subscribe(data => {
      this.peliculas_resultado = data.results;
      console.log(this.peliculas_resultado)
    })
  }

}
