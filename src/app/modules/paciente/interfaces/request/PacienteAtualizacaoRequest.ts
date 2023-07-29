import { SexoType } from '../../types/SexoType';
import { SituacaoType } from '../../types/SituacaoType';

export interface PacienteAtualizacaoRequest {
  nmPaciente: string;
  nmMae: string;
  nmPai: string;
  nmSocial: string;
  sexo: SexoType;
  idSituacao: SituacaoType;
  dtNascimento: Date;
  nrPlanoSaude: string;
}