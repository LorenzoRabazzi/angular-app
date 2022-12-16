import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class pokeRicercaService {
  pokemon: pokemon | null = null;

  constructor(private http: HttpClient) {}

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokeAdd = 'https://reqres.in/api/users';
  private pokeError = 'https://reqres.in/api/login';

  getPokemon(term: string): Observable<pokemon> {
    return this.http.get<pokemon>(`${this.pokemonUrl}${term}`);
  }

  addPokemon(
    pokemonName: string,
    pokemonType: string,
    pokemonId: number,
    pokemonEvolution: boolean,
    generateError: boolean
  ): Observable<void> {
    const body = {
      pokemonName,
      pokemonType,
      pokemonId,
      pokemonEvolution,
    };
    return this.http.post<void>(generateError ? this.pokeError : this.pokeAdd, body);
  }

}
