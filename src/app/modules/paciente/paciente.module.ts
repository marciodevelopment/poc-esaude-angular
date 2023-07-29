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
import { PACIENTE_ROUTES } from './paciente.routing';

import { PacientePesquisaComponent } from './paciente/paciente-pesquisa/paciente-pesquisa.component';
import { PacientePesquisaFormComponent } from './paciente/paciente-pesquisa-form/paciente-pesquisa-form.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';


@NgModule({
    declarations: [
    PacientePesquisaComponent, PacientePesquisaFormComponent, PacienteFormComponent,
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

    RouterModule.forChild(PACIENTE_ROUTES),
    SharedModule,
  ],
  providers: [DialogService, DynamicDialogConfig, DynamicDialogRef],
  exports: [
    PacientePesquisaComponent, PacientePesquisaFormComponent, PacienteFormComponent,
  ],
})
export class PacienteModule {}
