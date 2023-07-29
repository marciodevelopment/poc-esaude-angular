import { Injectable } from '@angular/core';
import { FabricantePesquisaResponse } from '../interfaces/response/FabricantePesquisaResponse';
import { FabricanteResponse } from '../interfaces/response/FabricanteResponse';
import { FabricanteAtualizacaoRequest } from '../interfaces/request/FabricanteAtualizacaoRequest';
import { FabricanteNovoRequest } from '../interfaces/request/FabricanteNovoRequest';
import { CrudService } from 'src/app/shared/services/CrudService';

@Injectable({
  providedIn: 'root',
})
export class FabricanteService extends CrudService<
  FabricantePesquisaResponse,
  FabricanteResponse,
  FabricanteNovoRequest,
  FabricanteAtualizacaoRequest
> {
  constructor() {
    super('medicamentos/fabricantes');
  }
}
