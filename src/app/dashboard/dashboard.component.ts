import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  destacados;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.getHeroes();
   // this.getDestacadosFromJson();

  }

  getDestacadosFromJson(): void {
    this.heroService.getDestacadosFromJson()
    .subscribe(destacados => this.destacados = destacados);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
