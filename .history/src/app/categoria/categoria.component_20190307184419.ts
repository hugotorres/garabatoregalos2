import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

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
