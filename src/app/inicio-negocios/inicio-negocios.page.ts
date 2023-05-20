import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Vendedor } from '../interfaces/vendedor';

@Component({
  selector: 'app-inicio-negocios',
  templateUrl: './inicio-negocios.page.html',
  styleUrls: ['./inicio-negocios.page.scss'],
})
export class InicioNegociosPage implements OnInit {
  vendedores: Vendedor[]  = [];
  constructor(private product: ProductoService) { }

  ngOnInit() {
    this.product.getVendedores().subscribe(vendedor=>{
      this.vendedores = vendedor;
    })
  }

}
