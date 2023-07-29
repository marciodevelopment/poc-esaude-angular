
import { Routes } from '@angular/router';


import { FabricantePesquisaComponent } from './fabricante/fabricante-pesquisa/fabricante-pesquisa.component';
import { FabricanteFormComponent } from './fabricante/fabricante-form/fabricante-form.component';

import { MedicamentoPesquisaComponent } from './medicamento/medicamento-pesquisa/medicamento-pesquisa.component';
import { MedicamentoFormComponent } from './medicamento/medicamento-form/medicamento-form.component';

export const MEDICAMENTO_ROUTES: Routes = [
  {
    path: 'medicamentos/fabricantes',
    component: FabricantePesquisaComponent,
  },
  {
    path: 'medicamentos/fabricantes/edit/:id',
    component: FabricanteFormComponent,
  },
  {
    path: 'medicamentos/fabricantes/new',
    component: FabricanteFormComponent,
  },
  {
    path: 'medicamentos',
    component: MedicamentoPesquisaComponent,
  },
  {
    path: 'medicamentos/edit/:id',
    component: MedicamentoFormComponent,
  },
  {
    path: 'medicamentos/new',
    component: MedicamentoFormComponent,
  },
];
