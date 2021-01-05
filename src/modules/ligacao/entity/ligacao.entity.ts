import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ligacoes')
export class Ligacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  origem_opm: string;

  @Column({ type: 'int', nullable: true })
  origem_sjd_ref: number;

  @Column({ type: 'int', nullable: true })
  origem_sjd_ref_ano: number;

  @Column({ nullable: true })
  origem_proc: string;

  @Column({ type: 'int', nullable: true })
  destino_sjd_ref: number;

  @Column({ type: 'int', nullable: true })
  destino_sjd_ref_ano: number;

  @Column({ nullable: true })
  destino_proc: string;

  @Column({ type: 'int', nullable: true })
  id_adl: number;

  @Column({ type: 'int', nullable: true })
  id_apfd: number;

  @Column({ type: 'int', nullable: true })
  id_cd: number;

  @Column({ type: 'int', nullable: true })
  id_cj: number;

  @Column({ type: 'int', nullable: true })
  id_desercao: number;

  @Column({ type: 'int', nullable: true })
  id_fatd: number;

  @Column({ type: 'int', nullable: true })
  id_ipm: number;

  @Column({ type: 'int', nullable: true })
  id_iso: number;

  @Column({ type: 'int', nullable: true })
  id_it: number;

  @Column({ type: 'int', nullable: true })
  id_sindicancia: number;

  @Column({ type: 'int', nullable: true })
  id_preso: number;

  @Column({ type: 'int', nullable: true })
  id_falecimento: number;

  @Column({ type: 'int', nullable: true })
  id_sai: number;

  @Column({ type: 'int', nullable: true })
  id_proc_outros: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
