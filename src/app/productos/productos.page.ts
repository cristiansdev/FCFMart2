import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Vendedor } from '../interfaces/vendedor';
import { Producto } from '../producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  id: string | null = '';
  public vendedor: Vendedor={
    nombre:'',
    password:'',
    correo: '',
    slogan: '',
    desripcion: '',
  };
  public productos: Producto[] = [];
  constructor(
  private formBuilder: FormBuilder,
  private aRoute: ActivatedRoute,
  private productoService: ProductoService,
  private router: Router
  ) {
  this.id = this.aRoute.snapshot.paramMap.get('id');
  console.log(this.id);
}

  ngOnInit() {
    this.obtenerVendedor();
  }

  obtenerVendedor(){
    if(this.id!=null){
      this.productoService.getVendedor(this.id).subscribe(res=>{
        this.vendedor = res;
        this.productoService.getProductos().subscribe(productos=>{
          console.log(res.id)
          this.productos = productos.filter(p=>p.idVendedor==res.id);
        })
      })
    }
  }

}
