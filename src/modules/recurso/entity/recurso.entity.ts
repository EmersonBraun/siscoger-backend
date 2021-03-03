import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('recursos')
export default class Recurso {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) opm: string;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) procedimento: string;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) datahora: Date; // datetime
  @Column({ nullable: true }) id_movimento: number;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
