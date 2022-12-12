import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { pokeRicercaService } from '../poke-ricerca.service';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-ricerca',
  templateUrl: './poke-ricerca.component.html',
  styleUrls: ['./poke-ricerca.component.css']
})
export class PokeRicercaComponent implements OnInit{
  pokemon!: Observable<pokemon>;
  private searchTerms = new Subject<string>();
  constructor(
    private pokeRicercaService: pokeRicercaService
  ){}

  search(term: string):void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pokeRicercaService.getPokemon().subscribe(res => {
        console.log(res)
      })
    })

  }
}
