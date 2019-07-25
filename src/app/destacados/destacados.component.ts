import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:max-line-length
  destacados: any = [{'id': '1', 'titulo': 'dia del padre', 'texto': 'Por el dia del padre 20% descuento', 'imagen_fondo': '\/milky-way-2695569_1280.jpg', 'imagen_destacada': '\/skulldefrenteazulconpuntos.png'}, {'id': '2', 'titulo': 'Nuevos Productos', 'texto': 'ProXimamente Camisetas Garabato', 'imagen_fondo': '', 'imagen_destacada': '\/camiseta-calavera-clipart.jpg'}];
  mediaUrl = 'https://www.garabatoregalos.com/october2/storage/app/media';
  constructor(private categoriaService: CategoriaService) { }

    ngOnInit() {
      this.getDestacados();
    }


    getDestacados(): void {
      this.categoriaService.getDestacados()
      .subscribe(destacados => this.destacados = destacados);
    }


}
