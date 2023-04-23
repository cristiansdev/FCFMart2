import { Component, OnInit } from '@angular/core';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  productos: Producto[] = [];
  constructor(
    private fcfmService: FCFMServiceService,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe(productos=>{
      this.productos = productos;
    })
  }

  async logout() {
    await this.fcfmService.logout();
    this.router.navigate(['/login-vendedor']);
  }

  async getProductos() {
    await this.fcfmService.getProductos(this.productos);
  }

  async eliminarProducto(producto: Producto){
    const response = await this.productoService.eliminarProducto(producto);
    console.log(response)
  }
}
