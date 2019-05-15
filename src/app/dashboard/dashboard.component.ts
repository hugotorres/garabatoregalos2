import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Categoria }         from '../categoria';
import { CategoriaService }  from '../categoria.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  posts;
  destacados;

  constructor(private postsService: CategoriaService) { }

  ngOnInit() {
    this.getAllPosts();
   // this.getDestacadosFromJson();
   this.filtrarProductos(this.posts);

  }

  getAllPosts(): void {
    this.postsService.getAllPosts()
    .subscribe(posts => this.posts =this.filtrarProductos(posts) );
  }

  filtrarProductos(productos){
    if(productos){
  let organizados =[];
      let alcancias=[];
      let materas=[];
      let portalapices=[];
      let otros=[];

      productos.forEach(function(post){
        if(post.acf.disponibles>0 && post.categories[0]=="2"){
          alcancias.push(post);
        }
        if(post.acf.disponibles>0 && post.categories[0]=="6"){
          materas.push(post);
        }
        if(post.acf.disponibles>0 && post.categories[0]=="7"){
         portalapices.push(post);
        }
        if(post.acf.disponibles>0 && post.categories[0]=="4"){
          otros.push(post);
        }
    });

    organizados.push(alcancias);
    organizados.push(materas);
    organizados.push(portalapices);
    organizados.push(otros);
    return organizados;

}



  }
}
