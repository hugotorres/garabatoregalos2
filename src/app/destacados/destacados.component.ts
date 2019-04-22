import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {
  destacados;

  constructor(private heroService: HeroService) { }

    ngOnInit() {
     // this.getDestacadosFromJson();
    }
    getDestacadosFromJson(): void {
      this.heroService.getDestacadosFromJson()
      .subscribe(destacados => this.destacados = destacados);
    }
    getDestacados(): void {
      this.heroService.getDestacados()
      .subscribe(destacados => this.destacados = destacados);
    }


}
