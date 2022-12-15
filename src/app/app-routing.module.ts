import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PokeRicercaComponent } from './poke-ricerca/poke-ricerca.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'pokemon', component: PokeRicercaComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




/*

bootstrap

<div class="container">
  <div class="row">
    <div class="col"routerLink="/dashboard">Dashboard</div>
    <div class="col"routerLink="/heroes">Heroes</div>
    <div class="w-100"></div>
    <div class="col"routerLink="/pokemon">Pokemon Research</div>
    <div class="col"routerLink="/form">Pokemon add</div>
  </div>
</div>

*/
