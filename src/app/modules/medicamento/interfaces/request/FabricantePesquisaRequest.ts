import { OrigemType } from '../../types/OrigemType';

export interface FabricantePesquisaRequest {
  cdFabricante: number;
  nmFabricante: string;
  idOrigem: OrigemType;
}