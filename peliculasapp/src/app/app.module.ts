import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

// Services
import { PeliculasService } from './services/peliculas.service';
import { HomeComponent } from './components/home/home.component';

// Routes
import { app_routing } from './app.route';

// http
import { HttpModule, JsonpModule } from '@angular/http';
import { MovieImgPipe } from './pipes/movie-img.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

// Modulo para el trabajo con formularios
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    MovieImgPipe,
    GaleriaComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
