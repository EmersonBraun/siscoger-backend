import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('presos')
export default class Preso {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) cargo: string;
  @Column({ nullable: true }) cdopm_quandopreso: string;
  @Column({ nullable: true }) cdopm_prisao: string;
  @Column({ nullable: true }) localreclusao: string;
  @Column({ nullable: true }) local: string;
  @Column({ nullable: true }) processo: string;
  @Column({ nullable: true }) natureza: string;
  @Column({ nullable: true }) complemento: string;
  @Column({ nullable: true }) numeromandado: string;
  @Column({ nullable: true }) id_presotipo: number;
  @Column({ nullable: true }) origem_proc: string;
  @Column({ nullable: true }) origem_sjd_ref: number;
  @Column({ nullable: true }) origem_sjd_ref_ano: number;
  @Column({ nullable: true }) origem_opm: string;
  @Column({ nullable: true }) inicio_data?: Date;
  @Column({ nullable: true }) fim_data?: Date;
  @Column({ nullable: true }) vara: string;
  @Column({ nullable: true }) comarca: string;
  @Column({ nullable: true }) obs_txt: string; // text
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
