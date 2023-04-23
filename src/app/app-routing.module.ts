import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard } from "./auth.guard"


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'pruebas',
    loadChildren: () =>
      import('./pruebas/pruebas.module').then((m) => m.PruebasPageModule),
  },
  {
    path: 'registro-vendedor',
    loadChildren: () =>
      import('./registro-vendedor/registro-vendedor.module').then(
        (m) => m.RegistroVendedorPageModule
      ),
  },
  {
    path: 'login-vendedor',
    loadChildren: () =>
      import('./login-vendedor/login-vendedor.module').then(
        (m) => m.LoginVendedorPageModule
      ),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'info-user',
    loadChildren: () =>
      import('./info-user/info-user.module').then((m) => m.InfoUserPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'home-vendedor',
    loadChildren: () => import('./home-vendedor/home-vendedor.module').then( m => m.HomeVendedorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'alta-productos',
    loadChildren: () => import('./alta-productos/alta-productos.module').then( m => m.AltaProductosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inicio-negocios',
    loadChildren: () => import('./inicio-negocios/inicio-negocios.module').then( m => m.InicioNegociosPageModule)
  },
  {
    path: 'modificacion-productos/:id',
    loadChildren: () => import('./modificacion-productos/modificacion-productos.module').then( m => m.ModificacionProductosPageModule),
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
