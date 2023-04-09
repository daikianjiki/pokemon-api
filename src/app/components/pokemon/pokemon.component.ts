import { Component } from '@angular/core';
import { PokeDex } from 'src/app/models/poke-dex/pokedex';
import { PokeApiService } from 'src/app/services/poke-api.service/poke-api.service.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  constructor(private pokeAPI : PokeApiService) {}

  input : number | string = "";
  pokemonImg : string = "";
  pokemonType : string | undefined = "";
  pokemonType2 : string | undefined = "";

  pokemon : PokeDex = {
    id: 0,
    name: '',
    url: '',
    sprites: undefined,
    types: [],
    stats: []
  }

  loadPokemon():void {
    this.pokeAPI.getPokemonByIdAPI(this.input).subscribe(json => {
      this.pokemon = json; 
      console.log(this.pokemon);
      if (this.pokemon.sprites?.front_default != undefined) {
        this.pokemonImg = this.pokemon.sprites.front_default;
      }
      this.pokemonType = this.pokemon.types[0].type.name;
      this.pokemonType2 = (this.pokemon.types[1] != undefined) ? 
      this.pokemon.types[1].type.name : this.pokemon.types[0].type.name;
    });
  }
}
