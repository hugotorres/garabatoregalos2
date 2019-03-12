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
      private heroService: CategoriaService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      this.getCategoria();
    }
  
    getCategoria(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getCategoria(id)
        .subscribe(categoria => this.categoria = categoria);
    }
  
    goBack(): void {
      this.location.back();
    }
  /*
   save(): void {
      this.heroService.updateCategoria(this.categoria)
        .subscribe(() => this.goBack());
    }
  

}
