import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FabricantePesquisaResponse } from '../../interfaces/response/FabricantePesquisaResponse';
import { FabricanteService } from '../../services/fabricante.service';
import { FabricantePesquisaComponent } from '../fabricante-pesquisa/fabricante-pesquisa.component';

import { BaseSearchFormComponent } from 'src/app/shared/components/base-components/BaseSearchFormComponent';

@Component({
  selector: 'app-fabricante-pesquisa-form',
  templateUrl: './fabricante-pesquisa-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FabricantePesquisaFormComponent),
    },
  ],
})
export class FabricantePesquisaFormComponent
  extends BaseSearchFormComponent<FabricantePesquisaResponse>
  implements OnInit
{
  @Input()
  public cdFabricante?: string;

  ngOnInit() {
    super.onInit(this.cdFabricante);
  }

  constructor(private fabricanteService: FabricanteService) {
    super(
      'Pesquisar Fabricantes',
      'cdFabricante',
      FabricantePesquisaComponent,
      fabricanteService
    );
  }
}
