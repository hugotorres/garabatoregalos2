import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Alcancias',tag:'stuff',productos:[{id:'calazul','name':'calavera Azul','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}] },
      { id: 12, name: 'Materas' ,tag:'stuff',productos:[{'name':'calavera Azul','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}]},
      { id: 13, name: 'Portalapices',tag:'stuff',productos:[{'name':'calavera Azul','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}] },
      { id: 14, name: 'Otros' ,tag:'stuff',productos:[{'name':'calavera Azul','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}]},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
