import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/interfaces/User';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.page.html',
  styleUrls: ['./login-vendedor.page.scss'],
})
export class LoginVendedorPage implements OnInit {
  private user: User = {
    email: '',
    password: '',
  };
  formLogin = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });
  private usuario:any;
  constructor(
    private formBuilder: FormBuilder,
    private fcfmService: FCFMServiceService,
    private router: Router, 
    private product: ProductoService
  ) {}

  ngOnInit() {}

  inicioSesion() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.getRawValue();
      if (email != null && password != null) {
        this.user.email = email;
        this.user.password = password;
        this.fcfmService
          .login(this.user)
          .then((userCredential) => {
            const user = userCredential.user;
            // Obtener el ID del usuario
            const userId = user.uid;

            this.product.getVendedorByVendedor(this.user.email, this.user.password);
            console.log(this.usuario)
            this.fcfmService.setUserId(userId)
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('idUser', this.fcfmService.getUserId())
            this.router.navigate(['/inicio']);
          })
          .catch((error) => console.log('Error: ' + error.message));
      }
    } 
  }
}
