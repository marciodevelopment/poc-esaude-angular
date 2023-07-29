import { TipoMedicamentoType } from '../../types/TipoMedicamentoType';
import { SituacaoType } from '../../types/SituacaoType';

export interface MedicamentoAtualizacaoRequest {
  nmMedicamento: string;
  idTipo: TipoMedicamentoType;
  idSituacao: SituacaoType;
  cdFabricante: number;
}