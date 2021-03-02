import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('desercoes')
export default class Desercao {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) decorrenciaconselho: string;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) termo_exclusao: string;
  @Column({ nullable: true }) termo_exclusao_pub: string;
  @Column({ nullable: true }) termo_captura: string;
  @Column({ nullable: true }) termo_captura_pub: string;
  @Column({ nullable: true }) pericia: string;
  @Column({ nullable: true }) pericia_pub: string;
  @Column({ nullable: true }) termo_inclusao: string;
  @Column({ nullable: true }) termo_inclusao_pub: string;
  @Column({ nullable: true }) opm_meta4: string;
  @Column({ nullable: true }) referenciavajme: string;
  @Column({ nullable: true }) prioridade: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
