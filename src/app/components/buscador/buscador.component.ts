import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent  implements OnInit {
  nombreProducto: string = "";
  productos:Producto []=[];
  productosfilt:Producto []=[];

  constructor(private productoS: ProductoService) { }
  ngOnInit() {
    this.productoS.getProductos().subscribe((data)=>{
      this.productos = data
      console.log(this.productos)
    })
    this.productosfilt=this.productos;

  }

  filtrar(){
    this.productosfilt=this.productos.filter(elemento => {
      return elemento.nombre.toLowerCase().includes(this.nombreProducto.toLowerCase());
    });
    this.nombreProducto = ''
    console.log(this.productosfilt);
  }

}