import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-components/BaseFormComponent';

import {FabricanteService } from '../../services/fabricante.service';

import {FabricanteAtualizacaoRequest } from '../../interfaces/request/FabricanteAtualizacaoRequest';
import {FabricanteNovoRequest } from '../../interfaces/request/FabricanteNovoRequest';
import {FabricanteResponse } from '../../interfaces/response/FabricanteResponse';
import { EnumUtil } from 'src/app/shared/utils/EnumUtil';
import { OrigemType } from '../../types/OrigemType';

@Component({
  selector: 'app-fabricante-form',
  templateUrl: './fabricante-form.component.html',
})
export class FabricanteFormComponent
  extends BaseFormComponent<
   FabricanteNovoRequest,
   FabricanteAtualizacaoRequest,
   FabricanteResponse
  >
  implements OnInit
{
  public fabricanteForm = this.formBuilder.group({
    nmFabricante: ['' , Validators.required],
    idOrigem: ['' , Validators.required],
  });

  public idOrigems = EnumUtil.convertToComboboxValues(OrigemType);
  

  constructor(
    private formBuilder: FormBuilder,
    private fabricanteService:FabricanteService
  ) {
    super('Fabricante', fabricanteService);
  }

  ngOnInit(): void {
    super.OnInit();
  }

  get form(): FormGroup {
    return this.fabricanteForm;
  }
}
