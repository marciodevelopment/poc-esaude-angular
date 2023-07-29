
import { Routes } from '@angular/router';


import { PacientePesquisaComponent } from './paciente/paciente-pesquisa/paciente-pesquisa.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';

export const PACIENTE_ROUTES: Routes = [
  {
    path: 'pacientes',
    component: PacientePesquisaComponent,
  },
  {
    path: 'pacientes/edit/:id',
    component: PacienteFormComponent,
  },
  {
    path: 'pacientes/new',
    component: PacienteFormComponent,
  },
];
