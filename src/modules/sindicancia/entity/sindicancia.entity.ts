import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sindicancias')
export class Sindicancia {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'int', nullable: true }) id_andamentocoger: number;
  @Column({ type: 'int', nullable: true }) id_andamento: number;
  @Column({ type: 'int' }) sjd_ref: number;
  @Column({ type: 'int' }) sjd_ref_ano: number;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) abertura_data: Date;
  @Column() sintese_txt: string;
  @Column() cdopm: string;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) doc_origem_txt: string;
  @Column({ nullable: true }) portaria_numero: string;
  @Column() portaria_data: Date;
  @Column({ nullable: true }) sol_cmt_file: string;
  @Column({ nullable: true }) sol_cmt_data: Date;
  @Column({ nullable: true }) sol_cmtgeral_file: string;
  @Column({ nullable: true }) sol_cmtgeral_data: Date;
  @Column({ nullable: true }) opm_meta4: string;
  @Column({ nullable: true }) relatorio_file: string;
  @Column({ nullable: true }) relatorio_data: Date;
  @Column() prioridade: boolean;
  @Column({ nullable: true }) motivo_cancelamento: string;
  @Column({ nullable: true }) motivo_abertura: string;
  @Column({ nullable: true }) motivo_outros: string;
  @Column({ nullable: true }) prorogacao: boolean;
  @Column({ nullable: true }) prorogacao_dias: number;
  @Column({ nullable: true }) completo: boolean;
  @Column({ nullable: true }) diasuteis_sobrestado: number;
  @Column({ nullable: true }) motivo_sobrestado: string;
  @Column({ nullable: true }) prazo_decorrido: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
