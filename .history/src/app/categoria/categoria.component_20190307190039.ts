import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Categoria }         from '../categoria';
import { CategoriaService }  from '../categoria.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {


    @Input() categoria: Categoria;

    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      this.getHero();
    }
  
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
  
    goBack(): void {
      this.location.back();
    }
  
   save(): void {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  

}
