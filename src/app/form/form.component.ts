import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pokemon } from '../pokemon';
import { pokeRicercaService } from '../poke-ricerca.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  res: any;
  pokemon: pokemon | null = null;
  public pokeErr = false;
  pokeForm = new FormGroup({
    pokeName: new FormControl('', [Validators.required, Validators.minLength(3),]),
    pokeType: new FormControl('', Validators.required),
    pokeId: new FormControl(0, [Validators.required, Validators.min(1)]),
    pokeEvolution: new FormControl(false),
  });

  constructor(private pokeRicercaService: pokeRicercaService) {}

  ngOnInit(): void {}



  addPokemon(): void {
    console.log(this.pokeForm)
    this.pokeRicercaService
      .addPokemon(
        this.pokeForm.value.pokeName ? this.pokeForm.value.pokeName : '',
        this.pokeForm.value.pokeType ? this.pokeForm.value.pokeType : '',
        this.pokeForm.value.pokeId ? this.pokeForm.value.pokeId : 0,
        this.pokeForm.value.pokeEvolution
          ? this.pokeForm.value.pokeEvolution
          : false,
        this.pokeErr
      )
      .subscribe(() => {
        console.log('submitted');
        this.pokeForm.reset();
      },
      () => {
        console.error("error");
      }
      );
  }
}
