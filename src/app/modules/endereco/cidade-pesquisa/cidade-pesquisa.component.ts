import { Component } from '@angular/core';
import { BaseSearchComponent } from 'src/app/shared/components/base-components/BaseSearchComponent';
import { SearchConfiguration } from 'src/app/shared/models/SearchConfiguration';
import { SearchFieldConfiguration } from 'src/app/shared/models/SearchFieldConfiguration';
import { TableButtomType } from 'src/app/shared/enums/TableButtomType';
import { CidadePesquisaReponse } from '../interfaces/CidadePesquisaReponse';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-cidade-pesquisa',
  templateUrl: './cidade-pesquisa.component.html',
})
export class CidadePesquisaComponent extends BaseSearchComponent<CidadePesquisaReponse> {
  private buttons: TableButtomType[] = [];

  constructor(private cidadeService: CidadeService) {
    super(cidadeService, 'Cidade', []);
  }

  public get searchConfiguration(): SearchConfiguration {
    return new SearchConfiguration('cdCidade', 'Cidades', [
      new SearchFieldConfiguration('cdCidade', 'Cód. Cidade', {
        filter: false,
      }),
      new SearchFieldConfiguration('nmCidade', 'Nome Cidade', { filter: true }),
    ]);
  }
}
