import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pads')
export default class Pad {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) doc_origem_txt: string; // text
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) sintese_txt: string; // text
  @Column({ nullable: true }) portaria_numero: string;
  @Column({ nullable: true }) portaria_data: Date;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) relatorio_file: string;
  @Column({ nullable: true }) solucao_file: string;
  @Column({ nullable: true }) prioridade: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
