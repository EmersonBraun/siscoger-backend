import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ipms')
export default class Ipm {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) id_municipio: number;
  @Column({ nullable: true }) id_situacao: number;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) opm_sigla: string;
  @Column({ nullable: true }) opm_ref: number;
  @Column({ nullable: true }) opm_ref_ano: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) autuacao_data: Date;
  @Column({ nullable: true }) crime: string;
  @Column({ nullable: true }) tentado: string;
  @Column({ nullable: true }) crime_especificar: string;
  @Column({ nullable: true }) sintese_txt: string; // text
  @Column({ nullable: true }) relato_enc: string;
  @Column({ nullable: true }) relato_enc_data: Date;
  @Column({ nullable: true }) relato_cmtopm: string;
  @Column({ nullable: true }) relato_cmtopm_data: Date;
  @Column({ nullable: true }) relato_cmtgeral: string;
  @Column({ nullable: true }) relato_cmtgeral_data: Date;
  @Column({ nullable: true }) vajme_ref: string;
  @Column({ nullable: true }) justicacomum_ref: string;
  @Column({ nullable: true }) vitima: string;
  @Column({ nullable: true }) confronto_armado_bl: string;
  @Column({ nullable: true }) vitima_qtdd: number;
  @Column({ nullable: true }) julgamento: string;
  @Column({ nullable: true }) portaria_numero: string;
  @Column({ nullable: true }) exclusao_txt: string; // text
  @Column({ nullable: true }) relato_enc_file: string;
  @Column({ nullable: true }) relato_cmtopm_file: string;
  @Column({ nullable: true }) relato_cmtgeral_file: string;
  @Column({ nullable: true }) defensor_oab: string;
  @Column({ nullable: true }) defensor_nome: string;
  @Column({ nullable: true }) relcomplementar_file: string;
  @Column({ nullable: true }) relcomplementar_data: Date;
  @Column({ nullable: true }) opm_meta4: string;
  @Column({ nullable: true }) bou_ano: number;
  @Column({ nullable: true }) bou_numero: number;
  @Column({ nullable: true }) prioridade: boolean;
  @Column({ nullable: true }) completo: boolean;
  @Column({ nullable: true }) prazo_decorrido: number;
  @Column({ nullable: true }) n_eproc: number;
  @Column({ nullable: true }) ano_eproc: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
