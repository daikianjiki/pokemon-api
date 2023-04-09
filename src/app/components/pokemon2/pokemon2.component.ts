import { Component } from '@angular/core';
import { PokeDex } from 'src/app/models/poke-dex/pokedex';
import { PokeApiService } from 'src/app/services/poke-api.service/poke-api.service.component';

@Component({
  selector: 'app-pokemon2',
  templateUrl: './pokemon2.component.html',
  styleUrls: ['./pokemon2.component.css']
})
export class Pokemon2Component {
  input2 : number | string = "";
  pokemon2 : PokeDex = {
    id: 0,
    name: '',
    url: '',
    sprites: undefined,
    types: [],
    stats: []
  }

  pokemonImg : string = "";
  pokemonType : string | undefined = "";
  pokemonType2 : string | undefined = "";

  constructor(private pokeAPI : PokeApiService) { 
  }
  loadPokemon():void {
    this.pokeAPI.getPokemonByIdAPI(this.input2).subscribe(json => {
      this.pokemon2 = json; 
      console.log(this.pokemon2);
      if (this.pokemon2.sprites?.front_default != undefined) {
        this.pokemonImg = this.pokemon2.sprites.front_default;
      }
      if (this.pokemon2.sprites?.back_default != undefined) {
        this.pokemonImg = this.pokemon2.sprites.front_default;
      }
      this.pokemonType = this.pokemon2.types[0].type.name;
      this.pokemonType2 = (this.pokemon2.types[1] != undefined) ? 
      this.pokemon2.types[1].type.name : this.pokemon2.types[0].type.name;
    });
  }

}
