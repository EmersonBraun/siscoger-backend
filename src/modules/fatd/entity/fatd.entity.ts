import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fatds')
export default class Fatd {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) sintese_txt: string; // text
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) doc_origem_txt: string; // text
  @Column({ nullable: true }) despacho_numero: string;
  @Column({ nullable: true }) portaria_data: Date;
  @Column({ nullable: true }) fato_file: string;
  @Column({ nullable: true }) relatorio_file: string;
  @Column({ nullable: true }) sol_cmt_file: string;
  @Column({ nullable: true }) sol_cg_file: string;
  @Column({ nullable: true }) rec_ato_file: string;
  @Column({ nullable: true }) rec_cmt_file: string;
  @Column({ nullable: true }) rec_crpm_file: string;
  @Column({ nullable: true }) rec_cg_file: string;
  @Column({ nullable: true }) opm_meta4: string;
  @Column({ nullable: true }) notapunicao_file: string;
  @Column({ nullable: true }) publicacaonp: string;
  @Column({ nullable: true }) prioridade: number;
  @Column({ nullable: true }) situacao_fatd: string;
  @Column({ nullable: true }) motivo_fatd: string;
  @Column({ nullable: true }) motivo_outros: string;
  @Column({ nullable: true }) completo: boolean;
  @Column({ nullable: true }) diasuteis_sobrestado: number;
  @Column({ nullable: true }) motivo_sobrestado: string;
  @Column({ nullable: true }) prazo_decorrido: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
