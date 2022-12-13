import { TestBed } from '@angular/core/testing';

import { pokeRicercaService } from './poke-ricerca.service';

describe('PokeRicercaService', () => {
  let service: pokeRicercaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pokeRicercaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
