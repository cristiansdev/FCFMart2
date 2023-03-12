import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import User from 'src/interfaces/User';
import { FCFMServiceService } from '../services/fcfmservice.service';
@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.page.html',
  styleUrls: ['./registro-vendedor.page.scss'],
})
export class RegistroVendedorPage implements OnInit {
  
  formLogin = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private FCFMService: FCFMServiceService) { }

  ngOnInit() {
  }

 async login(){
    if(this.formLogin.valid){
      const { email, password} = this.formLogin.getRawValue();
      const user: User = {
        email: email,
        password: password
      }
      const response = await this.FCFMService.addUser(user)
      console.log("Logeado");
    }else{
      this.formLogin.markAllAsTouched();
    }
  }

}
