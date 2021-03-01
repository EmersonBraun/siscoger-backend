import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('cd')
export default class Cd {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'int', nullable: true }) id_andamentocoger: number;
  @Column({ type: 'int', nullable: true }) id_andamento: number;
  @Column({ type: 'int', nullable: true }) id_motivoconselho: number;
  @Column({ type: 'int', nullable: true }) id_decorrenciaconselho: number;
  @Column({ type: 'int', nullable: true }) id_situacaoconselho: number;
  @Column({ type: 'int' }) sjd_ref: number;
  @Column({ type: 'int' }) sjd_ref_ano: number;
  @Column({ nullable: true }) motivo_outros: string;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) sintese_text: string;
  @Column({ nullable: true }) libelo_file: string;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) portaria_numero: string;
  @Column({ nullable: true }) portaria_data: Date;
  @Column({ nullable: true }) parecer_file: string;
  @Column({ nullable: true }) decisao_file: string;
  @Column({ nullable: true }) doc_prorrogacao: string;
  @Column({ nullable: true }) prescricao_comissao: string;
  @Column({ nullable: true }) parecer_cmtgeral: string;
  @Column({ nullable: true }) exclusao_text: string;
  @Column({ nullable: true }) rec_ato_file: string;
  @Column({ nullable: true }) rec_gov_file: string;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) ac_desempenho_bl: string;
  @Column({ nullable: true }) ac_conduta_bl: string;
  @Column({ nullable: true }) ac_honra_bl: string;
  @Column({ nullable: true }) tjpr_file: string;
  @Column({ nullable: true }) sjd_file: string;
  @Column() prioridade: boolean;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
