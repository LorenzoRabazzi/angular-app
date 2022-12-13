import { Component, OnInit } from '@angular/core';
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
  res:any;
  constructor(
    private pokeRicercaService: pokeRicercaService
  ){}

  ngOnInit():void {
     this.pokeRicercaService.getPokemon().subscribe(res=> {
      console.log(res)
    });
  }
}

