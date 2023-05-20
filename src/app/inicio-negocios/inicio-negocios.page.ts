import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-inicio-negocios',
  templateUrl: './inicio-negocios.page.html',
  styleUrls: ['./inicio-negocios.page.scss'],
})
export class InicioNegociosPage implements OnInit {
  public productos:Producto[] = []

  constructor(private productoS: ProductoService) { }

  ngOnInit() {
    this.productoS.getProductos().subscribe((data)=>{
      this.productos = data
      console.log(this.productos)
    })
  }

}
