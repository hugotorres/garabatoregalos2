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


    @Input() categoria:Categoria;
    @Input() hero: Categoria;
    selectedProduct;
    @Input() productosCategoria: Categoria[];

    constructor(
      private route: ActivatedRoute,
      private categoriaService: CategoriaService,
      private location: Location
    ) {}

    ngOnInit(): void {
      //this.getCategoria();
      this.getPostByCategory();
    }

    getPostByCategory():void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.categoriaService.getPostsByCategory(id)
        .subscribe(posts=>this.productosCategoria = posts);
    }
    
    getCategoria():void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.categoriaService.getCategoria(id)
        .subscribe(categorias=>this.categoria = categorias);
    }
    selectProductHandler(producto){
      this.selectedProduct=producto;
      }


    goBack(): void {
      this.location.back();
    }
  /*
   save(): void {
      this.heroService.updateCategoria(this.categoria)
        .subscribe(() => this.goBack());
    }
    */


}


