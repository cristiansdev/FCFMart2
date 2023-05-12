import { Component, OnInit } from '@angular/core';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../interfaces/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.page.html',
  styleUrls: ['./alta-productos.page.scss'],
})
export class AltaProductosPage implements OnInit {
  private producto: Producto = {
    nombre : '',
    precio: '',
    horas: '',
    descripcion: ''
  };
  idVendedor:string;
  constructor(
    private formBuilder: FormBuilder,
    private FCFMService: FCFMServiceService,
    private router: Router
  ) {
    this.idVendedor = FCFMService.getUserId()
  }

  formAgregar = this.formBuilder.group({
    nombreP: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    horas: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],

  });
  ngOnInit() {}
  async agregarProducto() {
    const { nombreP, precio, horas, descripcion } = this.formAgregar.getRawValue();
    if (nombreP != null && precio != null && horas !=null && descripcion !=null) {
      this.producto.nombre = nombreP;
      this.producto.precio = precio;
      this.producto.horas = horas;
      this.producto.descripcion = descripcion;
      this.producto.idVendedor = localStorage.getItem('idUser')
      await this.FCFMService.altaProducto(this.producto)
        .then((response) => {
          console.log('Logeado');
          console.log(response);
          this.router.navigate(['/inicio']);
        })
        .catch((error) => console.log(error));
    }
    
  }
}
