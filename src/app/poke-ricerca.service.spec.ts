import { TestBed } from '@angular/core/testing';

import { PokeRicercaService } from './poke-ricerca.service';

describe('PokeRicercaService', () => {
  let service: PokeRicercaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeRicercaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
