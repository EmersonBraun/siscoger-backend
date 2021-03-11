import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('isos')
export default class Iso {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) fato_data: Date;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) sintese_txt: string;
  @Column({ nullable: true }) tipo_penal: string;
  @Column({ nullable: true }) doc_tipo: string;
  @Column({ nullable: true }) doc_numero: string;
  @Column({ nullable: true }) portaria_numero: string;
  @Column({ nullable: true }) portaria_data: Date;
  @Column({ nullable: true }) exclusao_txt: string;
  @Column({ nullable: true }) opm_meta4: string;
  @Column({ nullable: true }) relatoriomedico_file: string;
  @Column({ nullable: true }) relatoriomedico_data: Date;
  @Column({ nullable: true }) solucaoautoridade_file: string;
  @Column({ nullable: true }) solucaoautoridade_data: Date;
  @Column({ nullable: true }) prioridade: boolean;
  @Column({ nullable: true }) completo: boolean;
  @Column({ nullable: true }) diasuteis_sobrestado: number;
  @Column({ nullable: true }) motivo_sobrestado: string;
  @Column({ nullable: true }) prazo_decorrido: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
