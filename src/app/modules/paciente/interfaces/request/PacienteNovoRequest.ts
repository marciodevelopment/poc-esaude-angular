import { SexoType } from '../../types/SexoType';

export interface PacienteNovoRequest {
  nmPaciente: string;
  nmMae: string;
  nmPai: string;
  nmSocial: string;
  sexo: SexoType;
  dtNascimento: Date;
  nrPlanoSaude: string;
}