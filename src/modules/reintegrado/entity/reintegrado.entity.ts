import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('reintegrados')
export default class Reintegrado {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) cargo: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) motivo: string;
  @Column({ nullable: true }) procedimento: string;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) retorno_data: Date;
  @Column({ nullable: true }) bg_numero: number;
  @Column({ nullable: true }) bg_ano: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
