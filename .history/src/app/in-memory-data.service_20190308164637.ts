import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Alcancias',tag:'stuff',imagen:'azulconpuntos2.png',productos:[
        {id:'alcaazul','name':'alcancia Azul','image':'alca-imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul2','name':'alcancia Azul2','image':'alca-imagen2.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul3','name':'alcancia Azul3','image':'alca-imagen3.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}
      ] },
      { id: 12, name: 'Materas' ,tag:'stuff',imagen:'imgen1.jpg',productos:[
        {id:'mateaverde','name':'matera Verde','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul','name':'alcancia Azul','image':'alca-imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul2','name':'alcancia Azul2','image':'alca-imagen2.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul3','name':'alcancia Azul3','image':'alca-imagen3.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}

      ]},
      { id: 13, name: 'Portalapices',tag:'stuff',imagen:'imgen1.jpg',productos:[
        {id:'portaroja','name':'portalapices Roja','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul','name':'alcancia Azul','image':'alca-imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul2','name':'alcancia Azul2','image':'alca-imagen2.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul3','name':'alcancia Azul3','image':'alca-imagen3.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}

      ] },
      { id: 14, name: 'Otros' ,tag:'stuff',imagen:'imgen1.jpg',productos:[
        {id:'otroamarilla','name':'Otros Amarilla','image':'imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul','name':'alcancia Azul','image':'alca-imagen1.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul2','name':'alcancia Azul2','image':'alca-imagen2.jpg','price':'$25000','images':['uno.jpg','dos.jpg']},
        {id:'alcaazul3','name':'alcancia Azul3','image':'alca-imagen3.jpg','price':'$25000','images':['uno.jpg','dos.jpg']}

      ]},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))  : 11;
  }
}
