import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import User from 'src/interfaces/User';
import { Router } from '@angular/router';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../producto';
import { Vendedor } from '../interfaces/vendedor';
@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.page.html',
  styleUrls: ['./registro-vendedor.page.scss'],
})
export class RegistroVendedorPage implements OnInit {
  private vendedor: Vendedor = {
    correo: '',
    password: '',
    desripcion: '',
    nombre: '',
    slogan: ''
  };
  private user: User = {
    email: '',
    password: ''
  }
  formLogin = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    slogan: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private FCFMService: FCFMServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  async registro() {
    if (this.formLogin.valid) {
      const { email, password, descripcion, nombre, slogan } = this.formLogin.getRawValue();
      if (email != null && password != null && descripcion != null && nombre != null && slogan != null) {
        this.vendedor.correo = email;
        this.vendedor.password = password;
        this.vendedor.desripcion = descripcion;
        this.vendedor.nombre = nombre;
        this.vendedor.slogan = slogan
        this.user.email = email;
        this.user.password = password;
        
        await this.FCFMService.register(this.user)
          .then((response) => {
            console.log('Logeado');
            this.FCFMService.altaVendedor(this.vendedor);
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
