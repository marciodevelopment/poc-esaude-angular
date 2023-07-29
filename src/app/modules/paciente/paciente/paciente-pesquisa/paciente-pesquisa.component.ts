import { Component } from '@angular/core';
import { BaseSearchComponent } from 'src/app/shared/components/base-components/BaseSearchComponent';
import { SearchConfiguration } from 'src/app/shared/models/SearchConfiguration';
import { SearchFieldConfiguration } from 'src/app/shared/models/SearchFieldConfiguration';
import { TableButtomType } from 'src/app/shared/enums/TableButtomType';
import { EnumUtil } from 'src/app/shared/utils/EnumUtil';
import { PacientePesquisaResponse } from '../../interfaces/response/PacientePesquisaResponse';
import { PacienteService } from '../../services/paciente.service';
import { SituacaoType } from '../../types/SituacaoType';



@Component({
  selector: 'app-paciente-pesquisa',
  templateUrl: './paciente-pesquisa.component.html',
})
export class PacientePesquisaComponent extends BaseSearchComponent<PacientePesquisaResponse> {
  private buttons: TableButtomType[] = [];

  constructor(private pacienteService: PacienteService) {
     super(pacienteService, 'Paciente', [
      TableButtomType.DELETE,
      TableButtomType.EDIT,
      TableButtomType.NEW,
    ]);
  }

 public override get searchConfiguration(): SearchConfiguration {
    return new SearchConfiguration('cdPaciente', 'Pesquisa Paciente', [
      new SearchFieldConfiguration('cdPaciente', 'Código paciente'),
      new SearchFieldConfiguration('nmPaciente', 'Nome Paciente'),
      new SearchFieldConfiguration('nmMae', 'Nome mãe'),
      new SearchFieldConfiguration('nmPai', 'Nome pai'),
      new SearchFieldConfiguration('nmSocial', 'Nome Social'),
      new SearchFieldConfiguration('idSituacao', 'Situacao', {
        filter: true,
        entriesType: EnumUtil.convertToComboboxValues(SituacaoType),
      }),
    ]);
  }
}

