import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
@Component({
	selector: 'app-categoria',
	templateUrl: './categoria.component.html',
	styleUrls: [ './categoria.component.css' ]
})
export class CategoriaComponent implements OnInit {
	@Input() categoria: Categoria;
  @Input() hero: Categoria;
  mediaUrl="https://www.garabatoregalos.com/october2/storage/app/media";
	nombreCategoria;
	selectedProduct;
  filtroCategoria = 0;
  setViewResponse;
	@Input() productosCategoria: Categoria[];

	constructor(
		private route: ActivatedRoute,
		private categoriaService: CategoriaService,
		private location: Location,
		private router: Router
	) {}

	ngOnInit(): void {
		//this.getCategoria();
		this.getPostByCategory();
		this.nombreCategoria = this.route.url['value'][0].path;
	}
	setCategory(category) {
		this.filtroCategoria = category;
	}
	getPostByCategory(): void {
		const id = +this.route.snapshot.paramMap.get('id');
    //this.categoriaService.getAllPosts().subscribe((posts) => (this.productosCategoria = posts));
    this.categoriaService.getData().subscribe((posts) => (this.productosCategoria = posts));
  }

  setView(item){
    this.categoriaService.setView(item).subscribe((response)=>this.setViewResponse=response);
  }

	getCategoria(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.categoriaService.getCategoria(id).subscribe((categorias) => (this.categoria = categorias));
	}
	selectProductHandler(producto) {
    this.setView(producto);
		this.selectedProduct = producto;
	}
	isActiveUrl(condition) {
	return 	this.filtroCategoria===condition;
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
