import { Component, OnInit } from '@angular/core';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  productos: Producto[] = [];
  constructor(
    private fcfmService: FCFMServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.getProductos()
  }

  async logout() {
    await this.fcfmService.logout();
    this.router.navigate(['/login-vendedor']);
  }

  async getProductos() {
    await this.fcfmService.getProductos(this.productos);
    console.log(this.productos);
  }
}
