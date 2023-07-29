import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-components/BaseFormComponent';

import { PacienteService } from '../../services/paciente.service';

import { PacienteAtualizacaoRequest } from '../../interfaces/request/PacienteAtualizacaoRequest';
import { PacienteNovoRequest } from '../../interfaces/request/PacienteNovoRequest';
import { PacienteResponse } from '../../interfaces/response/PacienteResponse';
import { EnumUtil } from 'src/app/shared/utils/EnumUtil';
import { SexoType } from '../../types/SexoType';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
})
export class PacienteFormComponent
  extends BaseFormComponent<
    PacienteNovoRequest,
    PacienteAtualizacaoRequest,
    PacienteResponse
  >
  implements OnInit
{
  public pacienteForm = this.formBuilder.group({
    nmPaciente: ['', Validators.required],
    nmMae: ['', Validators.required],
    nmPai: ['', Validators.required],
    nmSocial: [''],
    sexo: ['', Validators.required],
    dtNascimento: ['', Validators.required],
    nrPlanoSaude: [''],
  });

  public sexos = EnumUtil.convertToComboboxValues(SexoType);

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService
  ) {
    super('Paciente', pacienteService);
  }

  ngOnInit(): void {
    super.OnInit();
  }

  get form(): FormGroup {
    return this.pacienteForm;
  }
}
