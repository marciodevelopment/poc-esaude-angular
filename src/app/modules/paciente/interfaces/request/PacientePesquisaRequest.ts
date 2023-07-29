import { SituacaoType } from '../../types/SituacaoType';

export interface PacientePesquisaRequest {
  cdPaciente: number;
  nmPaciente: string;
  nmMae: string;
  nmPai: string;
  nmSocial: string;
  idSituacao: SituacaoType;
}