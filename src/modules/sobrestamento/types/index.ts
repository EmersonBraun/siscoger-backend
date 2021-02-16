/* eslint-disable camelcase */
export type Sobrestamento = {
  id?: number;
  rg: string;
  publicacao_inicio: string;
  inicio_data: Date;
  publicacao_termino: string;
  termino_data: Date;
  motivo: string;
  id_adl: number;
  id_cd: number;
  id_cj: number;
  id_fatd: number;
  id_iso: number;
  id_it: number;
  id_sindicancia: number;
  doc_controle_inicio: string;
  doc_controle_termino?: string;
  createdAt: Date;
  updatedAt: Date;
};
