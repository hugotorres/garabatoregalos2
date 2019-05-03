import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ProductoDetailComponent }  from './producto-detail/producto-detail.component';
import { CategoriaComponent }  from './categoria/categoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categoria/:id', component: CategoriaComponent },

  { path: 'alcancias/:id', component: CategoriaComponent },
  { path: 'materas/:id', component: CategoriaComponent },
  { path: 'portalapices/:id', component: CategoriaComponent },
  { path: 'otros/:id', component: ProductoDetailComponent },

  { path: 'producto/:id', component: ProductoDetailComponent },
  { path: 'categorias', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
