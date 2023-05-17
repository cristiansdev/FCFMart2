import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import User from 'src/interfaces/User';
import { Router } from '@angular/router';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../producto';
@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.page.html',
  styleUrls: ['./registro-vendedor.page.scss'],
})
export class RegistroVendedorPage implements OnInit {
  private user: User = {
    email: '',
    password: '',
  };
  formLogin = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private FCFMService: FCFMServiceService,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {}

  async registro() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.getRawValue();
      if (email != null && password != null) {
        this.user.email = email;
        this.user.password = password;
        await this.FCFMService.register(this.user)
          .then((response) => {
            let p:Producto = {
              nombre: 'prueba',
              descripcion: 'prueba',
              horas: 'prueba',
              precio:'prueba'
            }
            this.FCFMService.altaProducto(p);
            console.log('Logeado');
            console.log(response);
            this.router.navigate(['/login-vendedor']);
          })
          .catch((error) => console.log(error));
      }
    } else {
      this.formLogin.markAllAsTouched();
    }
  }
}
