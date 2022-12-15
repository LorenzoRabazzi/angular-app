import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class pokeRicercaService {
  pokemon: pokemon | null = null;

  constructor(private http: HttpClient) {}

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokeAdd = 'https://reqres.in/api/users'

  getPokemon(term: string): Observable<pokemon> {
    return this.http.get<pokemon>(`${this.pokemonUrl}${term}`);
  }

  addPokemon(pokemonName:string, pokemonType:string, pokemonEvolution:boolean):Observable<void>{
    const body = {
      pokemonName,
      pokemonType,
      pokemonEvolution
    };
    return this.http.post<void>(`${this.pokeAdd}`, body);

  }

}




