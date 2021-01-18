import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('adls')
export default class Adl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  id_andamento: number;

  @Column({ nullable: true })
  id_andamentocoger: number;

  @Column({ nullable: true })
  id_motivoconselho: number;

  @Column({ nullable: true })
  id_decorrenciaconselho: boolean;

  @Column({ nullable: true })
  id_situacaoconselho: number;

  @Column({ nullable: true })
  outromotivo: string;

  @Column({ nullable: true })
  cdopm: string;

  @Column({ nullable: true })
  fato_data: Date;

  @Column({ nullable: true })
  abertura_data: Date;

  @Column({ nullable: true })
  sintese_txt: string;

  @Column({ nullable: true })
  libelo_file: string;

  @Column({ nullable: true })
  doc_tipo: string;

  @Column({ nullable: true })
  doc_numero: string;

  @Column({ nullable: true })
  portaria_numero: string;

  @Column({ nullable: true })
  portaria_data: Date;

  @Column({ nullable: true })
  parecer_file: string;

  @Column({ nullable: true })
  decisao_file: string;

  @Column({ nullable: true })
  doc_prorrogacao: string;

  @Column({ nullable: true })
  sjd_ref: number;

  @Column({ nullable: true })
  sjd_ref_ano: number;

  @Column({ nullable: true })
  prescricao_data: Date;

  @Column({ nullable: true })
  parecer_comissao: string;

  @Column({ nullable: true })
  parecer_cmtgeral: string;

  @Column({ nullable: true })
  exclusao_txt: string;

  @Column({ nullable: true })
  rec_ato_file: string;

  @Column({ nullable: true })
  rec_gov_file: string;

  @Column({ nullable: true })
  ac_desempenho_bl: string;

  @Column({ nullable: true })
  ac_conduta_bl: string;

  @Column({ nullable: true })
  ac_honra_bl: string;

  @Column({ nullable: true })
  tjpr_file: string;

  @Column({ nullable: true })
  stj_file: string;

  @Column({ nullable: true })
  prioridade: number;
}
