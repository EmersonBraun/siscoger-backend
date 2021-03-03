import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('restricoes')
export default class Restricao {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) cargo: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) fardamento_bl: string;
  @Column({ nullable: true }) arma_bl: string;
  @Column({ nullable: true }) origem: string;
  @Column({ nullable: true }) cadastro_data: Date;
  @Column({ nullable: true }) inicio_data?: Date;
  @Column({ nullable: true }) fim_data: Date;
  @Column({ nullable: true }) retirada_data?: Date;
  @Column({ nullable: true }) proc: string;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) obs_txt: string; // text
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
