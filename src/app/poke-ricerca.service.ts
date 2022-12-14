import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class pokeRicercaService {
  pokemon: pokemon | null = null;

  constructor(private http: HttpClient) {}

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokeTest = 'https://pokeapi.co/api/v2/pokemon/ditto';

  getPokemon(term: string): Observable<pokemon> {
    return this.http.get<pokemon>(`${this.pokemonUrl}${term}`);
  }
}
