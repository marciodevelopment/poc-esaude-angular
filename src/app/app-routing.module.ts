import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
  },
  {
    path: 'endereco',
    loadChildren: () =>
      import('./modules/endereco/endereco.module').then(
        (m) => m.EnderecoModule
      ),
  },
 {
    path: 'medicamento',
    loadChildren: () =>
      import('./modules/medicamento/medicamento.module').then((m) => m.MedicamentoModule),
  },
 {
    path: 'paciente',
    loadChildren: () =>
      import('./modules/paciente/paciente.module').then((m) => m.PacienteModule),
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
