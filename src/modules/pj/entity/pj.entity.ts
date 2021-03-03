import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pjs')
export default class Pj {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) id_pad: number;
  @Column({ nullable: true }) cnpj: string;
  @Column({ nullable: true }) razaosocial: string;
  @Column({ nullable: true }) contato: string;
  @Column({ nullable: true }) telefone: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
