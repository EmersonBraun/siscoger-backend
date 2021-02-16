export type Pad = {
  id?: number;
  id_andamento: number;
  id_andamentocoger: number;
  sjd_ref: number;
  sjd_ref_ano: number;
  doc_origem_txt: string; // text
  fato_data: Date;
  cdopm: string;
  sintese_txt: string; // text
  portaria_numero: string;
  portaria_data: Date;
  doc_tipo: string;
  doc_numero: string;
  abertura_data: Date;
  relatorio_file: string;
  solucao_file: string;
  prioridade: number;
};
