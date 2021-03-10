import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('saidiligencias')
export default class SaiDiligencias {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) sai: number;
  @Column({ nullable: true }) rg_cadastro: string;
  @Column({ nullable: true }) data: Date;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) opm_abreviatura: string;
  @Column({ nullable: true }) diligencias_txt: string; // text
  @Column({ nullable: true }) digitador: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
