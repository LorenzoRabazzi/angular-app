import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map, tap  } from 'rxjs';
import { MessageService } from './message.service';
import { pokemon } from './pokemon';

@Injectable({providedIn: 'root'})
export class pokeRicercaService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokeTest = 'https://pokeapi.co/api/v2/pokemon/ditto';

/*
  private handleError<T>(operation =
    'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
*/
  getPokemon(): Observable<pokemon> {
    return this.http.get<pokemon>(this.pokeTest);
  }
}
