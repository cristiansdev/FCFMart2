import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modificacion-productos',
  templateUrl: './modificacion-productos.page.html',
  styleUrls: ['./modificacion-productos.page.scss'],
})
export class ModificacionProductosPage implements OnInit {
  private producto: Producto = {
    nombre: '',
    precio: '',
    horas: '',
    descripcion: '',
  };
  formAgregar = this.formBuilder.group({
    nombreP: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    horas: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });
  id: string | null = '';
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
    this.editar();
  }

  editar() {
    if (this.id !== null) {
      this.productoService.getProducto(this.id).subscribe((data) => {
        this.formAgregar.setValue({
          nombreP: data.nombre,
          descripcion: data.descripcion,
          horas: data.horas,
          precio: data.precio,
        });
      });
    }
  }
  actualizar() {
    const { nombreP, precio, horas, descripcion } =
      this.formAgregar.getRawValue();
    if (
      nombreP != null &&
      precio != null &&
      horas != null &&
      descripcion != null
    ) {
      this.producto.nombre = nombreP;
      this.producto.precio = precio;
      this.producto.horas = horas;
      this.producto.descripcion = descripcion;
      this.productoService.updateProducto(this.producto, this.id);
      this.router.navigate(['/inicio']);
    }
  }
}
