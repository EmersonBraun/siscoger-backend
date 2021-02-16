export type Restricao = {
  id?: number;
  rg: string;
  cargo: string;
  nome: string;
  fardamento_bl: string;
  arma_bl: string;
  origem: string;
  cadastro_data: Date;
  inicio_data?: Date;
  fim_data: Date;
  retirada_data?: Date;
  proc: string;
  sjd_ref: number;
  sjd_ref_ano: number;
  obs_txt: string; // text
};
