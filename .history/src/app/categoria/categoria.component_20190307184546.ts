import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { 
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  }

  ngOnInit() {
    @Input() hero: Hero;

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

}
