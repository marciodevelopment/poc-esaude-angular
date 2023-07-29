import { Component } from '@angular/core';
import { BaseSearchComponent } from 'src/app/shared/components/base-components/BaseSearchComponent';
import { SearchConfiguration } from 'src/app/shared/models/SearchConfiguration';
import { SearchFieldConfiguration } from 'src/app/shared/models/SearchFieldConfiguration';
import { TableButtomType } from 'src/app/shared/enums/TableButtomType';
import { EnumUtil } from 'src/app/shared/utils/EnumUtil';
import { MedicamentoPesquisaResponse } from '../../interfaces/response/MedicamentoPesquisaResponse';
import { MedicamentoService } from '../../services/medicamento.service';
import { TipoMedicamentoType } from '../../types/TipoMedicamentoType';
import { SituacaoType } from '../../types/SituacaoType';

@Component({
  selector: 'app-medicamento-pesquisa',
  templateUrl: './medicamento-pesquisa.component.html',
})
export class MedicamentoPesquisaComponent extends BaseSearchComponent<MedicamentoPesquisaResponse> {
  private buttons: TableButtomType[] = [];

  constructor(private medicamentoService: MedicamentoService) {
    super(medicamentoService, 'Medicamento', [
      TableButtomType.DELETE,
      TableButtomType.EDIT,
      TableButtomType.NEW,
    ]);
  }

  public override get searchConfiguration(): SearchConfiguration {
    return new SearchConfiguration('cdMedicamento', 'Pesquisa Medicamento', [
      new SearchFieldConfiguration('cdMedicamento', 'Código Medicamento'),
      new SearchFieldConfiguration('nmMedicamento', 'Nome Medicamento'),
      new SearchFieldConfiguration('idTipo', 'Tipo Medicamento', {
        filter: true,
        entriesType: EnumUtil.convertToComboboxValues(TipoMedicamentoType),
      }),
      new SearchFieldConfiguration('idSituacao', 'Situacao', {
        filter: true,
        entriesType: EnumUtil.convertToComboboxValues(SituacaoType),
      }),
      new SearchFieldConfiguration('nmFabricante', 'Fabricante'),
    ]);
  }
}
