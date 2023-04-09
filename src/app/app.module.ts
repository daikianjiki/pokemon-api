import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { Pokemon2Component } from './components/pokemon2/pokemon2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    Pokemon2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
