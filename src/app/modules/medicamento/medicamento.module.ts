import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from 'src/app/shared/shared.module';
import { MEDICAMENTO_ROUTES } from './medicamento.routing';

import { FabricantePesquisaComponent } from './fabricante/fabricante-pesquisa/fabricante-pesquisa.component';
import { FabricantePesquisaFormComponent } from './fabricante/fabricante-pesquisa-form/fabricante-pesquisa-form.component';
import { MedicamentoPesquisaComponent } from './medicamento/medicamento-pesquisa/medicamento-pesquisa.component';
import { MedicamentoPesquisaFormComponent } from './medicamento/medicamento-pesquisa-form/medicamento-pesquisa-form.component';
import { FabricanteFormComponent } from './fabricante/fabricante-form/fabricante-form.component';
import { MedicamentoFormComponent } from './medicamento/medicamento-form/medicamento-form.component';


@NgModule({
    declarations: [
    FabricantePesquisaComponent, FabricantePesquisaFormComponent, FabricanteFormComponent,
    MedicamentoPesquisaComponent, MedicamentoPesquisaFormComponent, MedicamentoFormComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    CardModule,
    ButtonModule,
    TableModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DynamicDialogModule,
    DropdownModule,
    ConfirmDialogModule,
    TooltipModule,
    CalendarModule,

    RouterModule.forChild(MEDICAMENTO_ROUTES),
    SharedModule,
  ],
  providers: [DialogService, DynamicDialogConfig, DynamicDialogRef],
  exports: [
    FabricantePesquisaComponent, FabricantePesquisaFormComponent, FabricanteFormComponent,
    MedicamentoPesquisaComponent, MedicamentoPesquisaFormComponent, MedicamentoFormComponent,
  ],
})
export class MedicamentoModule {}
