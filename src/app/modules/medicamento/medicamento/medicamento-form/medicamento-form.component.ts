import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-components/BaseFormComponent';

import {MedicamentoService } from '../../services/medicamento.service';

import {MedicamentoAtualizacaoRequest } from '../../interfaces/request/MedicamentoAtualizacaoRequest';
import {MedicamentoNovoRequest } from '../../interfaces/request/MedicamentoNovoRequest';
import {MedicamentoResponse } from '../../interfaces/response/MedicamentoResponse';
import { EnumUtil } from 'src/app/shared/utils/EnumUtil';
import { TipoMedicamentoType } from '../../types/TipoMedicamentoType';
import { SituacaoType } from '../../types/SituacaoType';

@Component({
  selector: 'app-medicamento-form',
  templateUrl: './medicamento-form.component.html',
})
export class MedicamentoFormComponent
  extends BaseFormComponent<
   MedicamentoNovoRequest,
   MedicamentoAtualizacaoRequest,
   MedicamentoResponse
  >
  implements OnInit
{
  public medicamentoForm = this.formBuilder.group({
    nmMedicamento: ['' , Validators.required],
    idTipo: ['' , Validators.required],
    idSituacao: ['' , Validators.required],
    cdFabricante: ['' ],
  });

  public idTipos = EnumUtil.convertToComboboxValues(TipoMedicamentoType);
  public idSituacaos = EnumUtil.convertToComboboxValues(SituacaoType);
  

  constructor(
    private formBuilder: FormBuilder,
    private medicamentoService:MedicamentoService
  ) {
    super('Medicamento', medicamentoService);
  }

  ngOnInit(): void {
    super.OnInit();
  }

  get form(): FormGroup {
    return this.medicamentoForm;
  }
}
