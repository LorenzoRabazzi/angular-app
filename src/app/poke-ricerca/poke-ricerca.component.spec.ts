import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeRicercaComponent } from './poke-ricerca.component';

describe('PokeRicercaComponent', () => {
  let component: PokeRicercaComponent;
  let fixture: ComponentFixture<PokeRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeRicercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
