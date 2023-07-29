import { TipoMedicamentoType } from '../../types/TipoMedicamentoType';
import { SituacaoType } from '../../types/SituacaoType';

export interface MedicamentoPesquisaRequest {
  cdMedicamento: number;
  nmMedicamento: string;
  idTipo: TipoMedicamentoType;
  idSituacao: SituacaoType;
  cdFabricante: number;
}