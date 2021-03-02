import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('situacoes')
export default class Situacao {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true }) situacao: string;
  @Column({ nullable: true }) situacao_abreviada: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}
