import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  selectedProduct: Hero;
  @Input() productosCategoria: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    // this.getProductsByCategory();
  }

  getProductsByCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getProductosPorCategoria(id)
      .subscribe(productos =>
        this.productosCategoria = productos[id]
       );
  }

  findIdInArray(productos, id) {
    return productos.forEach(element => {
      if ( element.id === id) {
        return element;
      }
    });
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  selectProductHandler(producto) {
  this.selectedProduct = producto;
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
