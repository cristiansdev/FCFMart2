import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/login-vendedor']);
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
    path: 'info-user',
    loadChildren: () =>
      import('./info-user/info-user.module').then((m) => m.InfoUserPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'home-vendedor',
    loadChildren: () => import('./home-vendedor/home-vendedor.module').then( m => m.HomeVendedorPageModule)
  },
  {
    path: 'inicio-negocios',
    loadChildren: () => import('./inicio-negocios/inicio-negocios.module').then( m => m.InicioNegociosPageModule)
  },

  {
    path: 'alta-productos',
    loadChildren: () => import('./alta-productos/alta-productos.module').then( m => m.AltaProductosPageModule)
  },
  {
    path: 'modificacion-productos',
    loadChildren: () => import('./modificacion-productos/modificacion-productos.module').then( m => m.ModificacionProductosPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
