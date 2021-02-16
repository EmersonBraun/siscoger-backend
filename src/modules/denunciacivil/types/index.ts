export type DenunciaCivil = {
  id?: number;
  rg: string;
  rg_cadastro: string;
  cargo: string;
  nome: string;
  processo: string;
  infracao: string;
  processocrime: string;
  julgamento: string;
  tipodapena: string;
  pena_anos: number;
  pena_meses: number;
  pena_dias: number;
  transitojulgado_bl: string;
  restritiva_bl: string;
  obs_txt: string;
};
