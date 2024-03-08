import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { VisualizarMoradoresComponent } from './visualizar-moradores/visualizar-moradores.component';
import { CadastarMoradorComponent } from './cadastar-morador/cadastar-morador.component';
import { canActivateGuard } from './auth/can-activate.guard';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'pagina-principal', component: PaginaPrincipalComponent, children: [
    {
      path: 'cadastrar-moradores',
      component: CadastarMoradorComponent,
      // canActivate: [canActivateGuard]
    },
    {
      path: 'visualizar-moradores',
      component: VisualizarMoradoresComponent,
    },
    {
      path: 'minha-conta',
      component: MinhaContaComponent,
    },
    {
      path: 'eventos',
      component: EventosComponent
    },
  ]},
  {path: '**', redirectTo: ''}
  // {path: 'visualizar-moradores', component: VisualizarMoradoresComponent},
  // {path: 'cadastrar-moradores', component: CadastarMoradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
