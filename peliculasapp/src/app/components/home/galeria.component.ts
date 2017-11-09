import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent {

  // Recibe parametros desde otro componente
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

}
