import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.pokemon = JSON.parse(localStorage.getItem('lastPokemon') as string);
  }

  searchPokemon(term: string): void {
    this.pokeRicercaService.getPokemon(term).subscribe((res) => {
      this.pokemon = res;
      localStorage.setItem('lastPokemon', JSON.stringify(res));
    });
  }
}
