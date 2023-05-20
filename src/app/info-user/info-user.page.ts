import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../interfaces/vendedor';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
})
export class InfoUserPage implements OnInit {
  public vendedor: Vendedor = {
    nombre: '',
    password: '',
    correo: '',
    slogan: '',
    desripcion: '',
  };
  idUser: string;
  constructor(private productoService: ProductoService) {
    let n = localStorage.getItem('idUser');
    if (n != null) {
      this.idUser = n;
    } else {
      this.idUser = '';
    }
   }

  ngOnInit() {
  }
  obtenerVendedor() {
    if (this.idUser != null) {
      this.productoService.getVendedor(this.idUser).subscribe((res) => {
        this.vendedor = res;
      });
    }
  }
}
