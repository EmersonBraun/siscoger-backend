import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,

} from 'typeorm';

@Entity('sobrestamentos')
export class Sobrestamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  rg: string;

  @Column({ nullable: true })
  publicacao_inicio: string;

  @CreateDateColumn()
  inicio_data: Date
  
  @Column({ nullable: true })
  publicacao_termino: string;

  @CreateDateColumn()
  termino_data: Date

  @Column({ nullable: true })
  motivo: string;

  @Column({ type: "int", nullable: true })
  id_adl: number

  @Column({ type: "int", nullable: true })
  id_cd: number

  @Column({ type: "int", nullable: true })
  id_cj: number


  @Column({ type: "int", nullable: true })
  id_fatd: number

  @Column({ type: "int", nullable: true })
  id_iso: number

  @Column({ type: "int", nullable: true })
  id_it: number

  @Column({ type: "int", nullable: true })
  id_sindicancia: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

}