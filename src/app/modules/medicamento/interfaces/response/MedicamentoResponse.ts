import { TipoMedicamentoType } from '../../types/TipoMedicamentoType';
import { SituacaoType } from '../../types/SituacaoType';

export interface MedicamentoResponse {
  cdMedicamento: number;
  nmMedicamento: string;
  idTipo: TipoMedicamentoType;
  idSituacao: SituacaoType;
  cdFabricante: number;
}