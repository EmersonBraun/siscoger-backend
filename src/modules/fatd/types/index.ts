export type Fatd = {
  id?: number;
  id_andamento: number;
  id_andamentocoger: number;
  sjd_ref: number;
  sjd_ref_ano: number;
  fato_data: Date;
  abertura_data: Date;
  sintese_txt: string; // text
  cdopm: string;
  doc_tipo: string;
  doc_numero: string;
  doc_origem_txt: string; // text
  despacho_numero: string;
  portaria_data: Date;
  fato_file: string;
  relatorio_file: string;
  sol_cmt_file: string;
  sol_cg_file: string;
  rec_ato_file: string;
  rec_cmt_file: string;
  rec_crpm_file: string;
  rec_cg_file: string;
  opm_meta4: string;
  notapunicao_file: string;
  publicacaonp: string;
  prioridade: number;
  situacao_fatd: string;
  motivo_fatd: string;
  motivo_outros: string;
};
