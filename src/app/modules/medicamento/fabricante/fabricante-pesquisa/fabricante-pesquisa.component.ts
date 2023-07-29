import { Component } from '@angular/core';
import { BaseSearchComponent } from 'src/app/shared/components/base-components/BaseSearchComponent';
import { SearchConfiguration } from 'src/app/shared/models/SearchConfiguration';
import { SearchFieldConfiguration } from 'src/app/shared/models/SearchFieldConfiguration';
import { TableButtomType } from 'src/app/shared/enums/TableButtomType';
import { EnumUtil } from 'src/app/shared/utils/EnumUtil';
import { FabricantePesquisaResponse } from '../../interfaces/response/FabricantePesquisaResponse';
import { FabricanteService } from '../../services/fabricante.service';
import { OrigemType } from '../../types/OrigemType';



@Component({
  selector: 'app-fabricante-pesquisa',
  templateUrl: './fabricante-pesquisa.component.html',
})
export class FabricantePesquisaComponent extends BaseSearchComponent<FabricantePesquisaResponse> {
  private buttons: TableButtomType[] = [];

  constructor(private fabricanteService: FabricanteService) {
     super(fabricanteService, 'Fabricante', [
      TableButtomType.DELETE,
      TableButtomType.EDIT,
      TableButtomType.NEW,
    ]);
  }

 public override get searchConfiguration(): SearchConfiguration {
    return new SearchConfiguration('cdFabricante', 'Pesquisa Fabricante', [
      new SearchFieldConfiguration('cdFabricante', 'Código Fabricante'),
      new SearchFieldConfiguration('nmFabricante', 'Nome Fabricante'),
      new SearchFieldConfiguration('idOrigem', 'Origem', {
        filter: true,
        entriesType: EnumUtil.convertToComboboxValues(OrigemType),
      }),
    ]);
  }
}

