export type ExclusaoJudicial = {
  id?: number;
  rg: string;
  cargo: string;
  nome: string;
  cdopm_quandoexcluido: string;
  origem_proc: string;
  origem_sjd_ref: number;
  origem_sjd_ref_ano: number;
  origem_opm: string;
  processo: string;
  complemento: string;
  vara: string;
  numerounico: string;
  data: Date;
  exclusao_data: Date;
  obs_txt: string; // text
  portaria_numero: number;
  bg_numero: number;
  bg_ano: number;
  prioridade: number;
};
