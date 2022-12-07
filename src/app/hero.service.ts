import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map, tap  } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({providedIn: 'root'})

export class HeroService {
  updateHero(hero: Hero) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient,
    private messageService: MessageService) {
    }

    private heroesUrl = 'api/heroes';  // URL to web api

    private log(message:   string){
      this.messageService.add('HeroService: ${message}');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_=>this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id:number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateHero(hero: Hero):Observable<any>{
    returne this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log('update hero id$hero.id ')),
      catchError(this.handleError<any>('updateHero'))
    );
  }

}
