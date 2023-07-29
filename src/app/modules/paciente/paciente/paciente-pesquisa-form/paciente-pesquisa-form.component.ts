import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { PacientePesquisaResponse } from '../../interfaces/response/PacientePesquisaResponse';
import { PacienteService } from '../../services/paciente.service';
import { PacientePesquisaComponent } from '../paciente-pesquisa/paciente-pesquisa.component';

import { BaseSearchFormComponent } from 'src/app/shared/components/base-components/BaseSearchFormComponent';

@Component({
  selector: 'app-paciente-pesquisa-form',
  templateUrl: './paciente-pesquisa-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PacientePesquisaFormComponent),
    },
  ],
})
export class PacientePesquisaFormComponent
  extends BaseSearchFormComponent<PacientePesquisaResponse>
  implements OnInit
{
  @Input()
  public cdPaciente?: string;

  ngOnInit() {
    super.onInit(this.cdPaciente);
  }

  constructor(private pacienteService: PacienteService) {
    super(
      'Pesquisar Pacientes',
      'cdPaciente',
      PacientePesquisaComponent,
      pacienteService
    );
  }
}
