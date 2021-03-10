import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('procoutros')
export default class ProcOutros {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) rg_cadastro: string;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) opm_abreviatura: string;
  @Column({ nullable: true }) cdopm_apuracao: string;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) data: Date;
  @Column({ nullable: true }) bou_ano: string;
  @Column({ nullable: true }) bou_numero: string;
  @Column({ nullable: true }) id_municipio: number;
  @Column({ nullable: true }) doc_origem: string;
  @Column({ nullable: true }) num_doc_origem: string;
  @Column({ nullable: true }) motivo_abertura: string;
  @Column({ nullable: true }) sintese_txt: string; // text
  @Column({ nullable: true }) relatorio1: string;
  @Column({ nullable: true }) relatorio1_file: string;
  @Column({ nullable: true }) relatorio1_data: Date;
  @Column({ nullable: true }) relatorio2: string;
  @Column({ nullable: true }) relatorio2_file: string;
  @Column({ nullable: true }) relatorio2_data: Date;
  @Column({ nullable: true }) relatorio3: string;
  @Column({ nullable: true }) relatorio3_file: string;
  @Column({ nullable: true }) relatorio3_data: Date;
  @Column({ nullable: true }) desc_outros: string;
  @Column({ nullable: true }) andamento: string;
  @Column({ nullable: true }) andamentocoger: string;
  @Column({ nullable: true }) vtr1_placa: string;
  @Column({ nullable: true }) vtr1_prefixo: string;
  @Column({ nullable: true }) vtr2_placa: string;
  @Column({ nullable: true }) vtr2_prefixo: string;
  @Column({ nullable: true }) digitador: string;
  @Column({ nullable: true }) num_pid: string;
  @Column({ nullable: true }) limite_data: Date;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
