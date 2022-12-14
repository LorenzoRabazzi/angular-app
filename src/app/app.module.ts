import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { PokeRicercaComponent } from './poke-ricerca/poke-ricerca.component';
import { pokeRicercaService } from './poke-ricerca.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
    PokeRicercaComponent,
  ],
  providers: [pokeRicercaService],
  imports: [HttpClientModule, AppRoutingModule, FormsModule, BrowserModule, NoopAnimationsModule, MatSlideToggleModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
