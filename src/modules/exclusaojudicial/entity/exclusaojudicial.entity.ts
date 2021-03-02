import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ExclusaoJudicials')
export default class ExclusaoJudicial {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) cargo: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) cdopm_quandoexcluido: string;
  @Column({ nullable: true }) origem_proc: string;
  @Column({ nullable: true }) origem_sjd_ref: number;
  @Column({ nullable: true }) origem_sjd_ref_ano: number;
  @Column({ nullable: true }) origem_opm: string;
  @Column({ nullable: true }) processo: string;
  @Column({ nullable: true }) complemento: string;
  @Column({ nullable: true }) vara: string;
  @Column({ nullable: true }) numerounico: string;
  @Column({ nullable: true }) data: Date;
  @Column({ nullable: true }) exclusao_data: Date;
  @Column({ nullable: true }) obs_txt: string; // text
  @Column({ nullable: true }) portaria_numero: number;
  @Column({ nullable: true }) bg_numero: number;
  @Column({ nullable: true }) bg_ano: number;
  @Column({ nullable: true }) prioridade: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
