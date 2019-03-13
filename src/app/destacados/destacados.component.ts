import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {
  destacados= [];
  constructor(private heroService: HeroService) { }

    ngOnInit() {
      this.getDestacados();
    }
  
    getDestacados(): void {
      this.heroService.getDestacados()
      .subscribe(destacados => this.destacados = destacados);
    }
 

}
