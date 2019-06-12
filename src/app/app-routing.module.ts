import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ProductoDetailComponent }  from './producto-detail/producto-detail.component';
import { CategoriaComponent }  from './categoria/categoria.component';
import { ContactoComponent }  from './contacto/contacto.component';
const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'productos', component: CategoriaComponent },
  { path: 'categorias', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
