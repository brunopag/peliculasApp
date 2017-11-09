import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  url:string = "http://image.tmdb.org/t/p/w500";

  transform( movie: any, poster:boolean = false ): any {

    if(poster){
      return this.url + movie.poster_path;
    }

    if(movie.backdrop_path){
      return this.url + movie.backdrop_path
    } else {
      if(movie.poster_path){
        return this.url + movie.poster_path
      } else{
        return "assets/img/no_image.jpeg";
      }
    }
  }

}
