import { Component, OnInit } from '@angular/core';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { Vendedor } from '../interfaces/vendedor';

@Component({
  selector: 'app-inicio-negocios',
  templateUrl: './inicio-negocios.page.html',
  styleUrls: ['./inicio-negocios.page.scss'],
})
export class InicioNegociosPage implements OnInit {
  vendedores: Vendedor[]  = [];
  constructor(private fcfmservice: FCFMServiceService) { }

  ngOnInit() {
    // this.fcfmservice.getVendedor().subscribe(vendedores=>{
    //   this.vendedores = vendedores;
    // })
  }

}
