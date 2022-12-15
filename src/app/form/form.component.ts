import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { pokemon } from '../pokemon';
import { pokeRicercaService } from '../poke-ricerca.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  res:any;
  pokemon:pokemon | null=null;
  pokeForm = new FormGroup ({
    pokeName: new FormControl(''),
    pokeType: new FormControl(''),
    pokeEvolution: new FormControl(false),
  });

  constructor(private pokeRicercaService : pokeRicercaService) {}

  ngOnInit(): void {
  }

  addPokemon():void{

    this.pokeRicercaService.addPokemon(
      this.pokeForm.value.pokeName ? this.pokeForm.value.pokeName : "",
      this.pokeForm.value.pokeType ? this.pokeForm.value.pokeType : "",
      this.pokeForm.value.pokeEvolution ? this.pokeForm.value.pokeEvolution : false
    ).subscribe(()=>{
      console.log("CIAO")
    })
  }

}



/*
Ok, il prossimo task che vorrei che faceste è il seguente:
Creare un nuovo componente da posizionare sotto il dettaglio dei pokemon attuale.
Il nuovo componente è un form, più precisamente un form di richiesta di un nuovo pokemon.

Questo form deve contenere sicuramente:
1 Il nuovo nome del pokemon
2 Il tipo del pokemon (con una select, limitato a 4/5 tipi tanto è per farvi familiarizzare con le select)
3 Se il pokemon ha delle evoluzioni oppure no (con una checkbox)
4 I dati compilati nel form poi, vanno mandati a questo endpoint qui tramite una POST: https://reqres.in/api/users
  (Differenze tra GET e POST, Guida per le richieste HTTP su angular, Esempi di POST)

La risposta del server è mockappata e ritorna sempre un 200, ma a noi non interessa.
Quando la chiamata finisce con un successo vorrei che voi facciate vedere un box verde di successo subito sotto il form e puliste il form.

Opzionali ma altamente consigliati:
Aggiungere una validazione sui campi del form. Es. Se il nome del pokemon è vuoto, non posso effettuare la chiamata
Far vedere un box rosso di errore sotto il form in caso di errore della chiamata.
Ampliare i campi del form
*/
