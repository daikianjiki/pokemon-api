import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// When you write $Injectable({providedIn: 'root'}) this means that the service in singleton for whole application and 
// you can inject in anywhere in the application. 
// I'm leaving a note here to add notes about 'dependency injection'. 
@Injectable({
  providedIn: 'root'
})


export class PokeApiService {

  constructor(private httpClient : HttpClient) { }

  // return an observable which produces a response from a request to GET /v2/pokemon from pokemon api.
  // observable has multiple agents acting as 'subscribers' to data, and can handle multiple 'publishers' to 
  // that data. This generally referred to as the pub/sub model.
  getPokemonByIdAPI(id : number | string) : Observable<any>{
    const api = this.httpClient.get("https://pokeapi.co/api/v2/pokemon/"+id);
    return api;
  } 
}
