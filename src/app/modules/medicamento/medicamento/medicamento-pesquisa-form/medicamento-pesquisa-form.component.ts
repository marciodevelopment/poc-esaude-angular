import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { MedicamentoPesquisaResponse } from '../../interfaces/response/MedicamentoPesquisaResponse';
import { MedicamentoService } from '../../services/medicamento.service';
import { MedicamentoPesquisaComponent } from '../medicamento-pesquisa/medicamento-pesquisa.component';

import { BaseSearchFormComponent } from 'src/app/shared/components/base-components/BaseSearchFormComponent';

@Component({
  selector: 'app-medicamento-pesquisa-form',
  templateUrl: './medicamento-pesquisa-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MedicamentoPesquisaFormComponent),
    },
  ],
})
export class MedicamentoPesquisaFormComponent
  extends BaseSearchFormComponent<MedicamentoPesquisaResponse>
  implements OnInit
{
  @Input()
  public cdMedicamento?: string;

  ngOnInit() {
    super.onInit(this.cdMedicamento);
  }

  constructor(private medicamentoService: MedicamentoService) {
    super(
      'Pesquisar Medicamentos',
      'cdMedicamento',
      MedicamentoPesquisaComponent,
      medicamentoService
    );
  }
}
