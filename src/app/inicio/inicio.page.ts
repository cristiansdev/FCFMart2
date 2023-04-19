import { Component, OnInit } from '@angular/core';
import { FCFMServiceService } from '../services/fcfmservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(
    private fcfmService: FCFMServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  async logout() {
    await this.fcfmService.logout();
    this.router.navigate(['/login-vendedor'])
  }
}
