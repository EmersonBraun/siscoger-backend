import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('denunciacivis')
export default class DenunciaCivil {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) rg_cadastro: string;
  @Column({ nullable: true }) cargo: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) processo: string;
  @Column({ nullable: true }) infracao: string;
  @Column({ nullable: true }) processocrime: string;
  @Column({ nullable: true }) julgamento: string;
  @Column({ nullable: true }) tipodapena: string;
  @Column({ nullable: true }) pena_anos: number;
  @Column({ nullable: true }) pena_meses: number;
  @Column({ nullable: true }) pena_dias: number;
  @Column({ nullable: true }) transitojulgado_bl: string;
  @Column({ nullable: true }) restritiva_bl: string;
  @Column({ nullable: true }) obs_txt: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
