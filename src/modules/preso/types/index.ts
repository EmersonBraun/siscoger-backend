export type Preso = {
  id?: number;
  rg: string;
  nome: string;
  cargo: string;
  cdopm_quandopreso: string;
  cdopm_prisao: string;
  localreclusao: string;
  local: string;
  processo: string;
  natureza: string;
  complemento: string;
  numeromandado: string;
  id_presotipo: number;
  origem_proc: string;
  origem_sjd_ref: number;
  origem_sjd_ref_ano: number;
  origem_opm: string;
  inicio_data?: Date;
  fim_data?: Date;
  vara: string;
  comarca: string;
  obs_txt: string; // text
};
