import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pokeRicercaService } from '../poke-ricerca.service';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-ricerca',
  templateUrl: './poke-ricerca.component.html',
  styleUrls: ['./poke-ricerca.component.scss'],
})
export class PokeRicercaComponent implements OnInit {
  pokemon: pokemon | null = null;
  res: any;
  constructor(private pokeRicercaService: pokeRicercaService) {}

  ngOnInit(): void {}

  searchPokemon(term: string): void {
    this.pokeRicercaService.getPokemon(term).subscribe((res) => {
      this.pokemon = res;
      console.log(res);
    });
  }
}
