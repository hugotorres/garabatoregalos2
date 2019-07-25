import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
declare var $: any;
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: [ './categoria.component.css' ]
})
export class CategoriaComponent implements OnInit {
  @Input() categoria: Categoria;
  @Input() hero: Categoria;
  mediaUrl = 'https://www.garabatoregalos.com/october2/storage/app/media';
  nombreCategoria;
  selectedProduct;
  filtroCategoria = 0;
  setViewResponse;
  phoneNumber;
  @Input() productosCategoria: Categoria[];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getCategoria();
    this.getPostByCategory();
    this.cargarProductoUrl(this.route.snapshot.paramMap.get('id'));
    this.nombreCategoria = this.route.url['value'][0].path;
  }
  cargarProductoUrl(id) {
    if (id) {
      this.getSelectedProduct({'id': id});
      $('#exampleModal').modal('toggle');
    }
  }

  setCategory(category) {
    this.filtroCategoria = category;
  }

  getPostByCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.categoriaService.getAllPosts().subscribe((posts) => (this.productosCategoria = posts));
    this.categoriaService.getData().subscribe((posts) => (this.productosCategoria = posts));
    this.phoneNumber = this.categoriaService.getPhoneNumber();
  }


   slugify(string) {
    const a = 'àáäâãåăæąçćčđèéėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    const b = 'aaaaaaaaacccdeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }


  getSelectedProduct(item) {
    this.categoriaService.getProduct(item).subscribe((response) => this.selectedProduct = response);
  }
  getCategoria(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriaService.getCategoria(id).subscribe((categorias) => (this.categoria = categorias));
  }
  selectProductHandler(producto) {
    this.selectedProduct = producto;
    $('#exampleModal').modal('toggle');
    this.categoriaService.setView(producto).subscribe((response) => console.log(response));
  }
  isActiveUrl(condition) {
  return 	this.filtroCategoria === condition;
  }

  goBack(): void {
    this.location.back();
  }

}
