import { Component, OnInit } from '@angular/core';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { Observable } from 'rxjs';
import { Vendedor } from '../interfaces/vendedor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  idUser: string;
  productos: Producto[] = [];
  constructor(
    private fcfmService: FCFMServiceService,
    private router: Router,
    private productoService: ProductoService
  ) {
    let n = localStorage.getItem('idUser');
    if (n != null) {
      this.idUser = n;
    } else {
      this.idUser = '';
    }
  }
  public vendedor: Vendedor = {
    nombre: '',
    password: '',
    correo: '',
    slogan: '',
    desripcion: '',
  };
  ngOnInit() {
    this.productoService.getProductos().subscribe((productos) => {
      this.productos = productos.filter((p) => p.idVendedor === this.idUser);
    });
    this.obtenerVendedor();
  }
  obtenerVendedor() {
    if (this.idUser != null) {
      this.productoService.getVendedor(this.idUser).subscribe((res) => {
        this.vendedor = res;
        this.productoService.getProductos().subscribe((productos) => {
          console.log(res.id);
          this.productos = productos.filter((p) => p.idVendedor == res.id);
        });
      });
    }
  }

  async logout() {
    await this.fcfmService.logout();
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('idUser');
    this.router.navigate(['/login-vendedor']);
  }

  async getProductos() {
    await this.fcfmService.getProductos(this.productos);
  }

  async eliminarProducto(producto: Producto) {
    const response = await this.productoService.eliminarProducto(producto);
    console.log(response);
  }
}
