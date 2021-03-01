import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('apfd')
export default class Apfd {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) tipo: string;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) sintese_txt: string;
  @Column({ nullable: true }) tipo_penal: string;
  @Column({ nullable: true }) tipo_penal_novo: string;
  @Column({ nullable: true }) especificar: string;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) exclusao_txt: string;
  @Column({ nullable: true }) opm_meta4: string;
  @Column({ nullable: true }) referenciavajme: string;
  @Column({ nullable: true }) prioridade: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
