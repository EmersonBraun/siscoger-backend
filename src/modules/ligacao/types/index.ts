/* eslint-disable camelcase */
export type Ligacao = {
  id?: number;
  origem_opm: string;
  origem_sjd_ref: number;
  origem_sjd_ref_ano: number;
  origem_proc: string;
  destino_sjd_ref: number;
  destino_sjd_ref_ano: number;
  destino_proc: string;
  id_adl: number;
  id_apfd: number;
  id_cd: number;
  id_cj: number;
  id_desercao: number;
  id_fatd: number;
  id_ipm: number;
  id_iso: number;
  id_it: number;
  id_sindicancia: number;
  id_preso: number;
  id_falecimento: number;
  id_sai: number;
  id_proc_outros: number;
  createdAt: Date;
  updatedAt: Date;
};
