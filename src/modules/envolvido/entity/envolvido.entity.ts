import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,

} from 'typeorm';

@Entity('envolvidos')
export class Envolvido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  rg_substituto: string
  
  @Column({ nullable: true })
  nome: string
  
  @Column({ nullable: true })
  rg: string
  
  @Column({ nullable: true })
  situacao: string
  
  @Column({ nullable: true })
  cargo: string
  
  @Column({ nullable: true })
  resultado: string
  
  @Column({ type: "int", nullable: true })
  inclusao_ano: number
  
  @Column({ nullable: true })
  ipm_julgamento: string
  
  @Column({ nullable: true })
  ipm_processocrime: string
  
  @Column({ type: "int", nullable: true })
  ipm_pena_anos: number
  
  @Column({ type: "int", nullable: true })
  ipm_pena_meses: number
  
  @Column({ type: "int", nullable: true })
  ipm_pena_dias: number
  
  @Column({ nullable: true })
  ipm_tipodapena: string
  
  @Column({ nullable: true })
  ipm_transitojulgado_bl: string
  
  @Column({ nullable: true })
  ipm_restritiva_bl: string
  
  @Column({ nullable: true })
  obs_txt: string

  @Column({ type: 'date', nullable: true })
  exclusaoportaria_data: Date
  
  @Column({ nullable: true })
  exclusaoportaria_numero: string
  
  @Column({ nullable: true })
  exclusaoboletim: string
  
  @Column({ type: "int", nullable: true })
  exclusaobg_numero: number
  
  @Column({ type: "int", nullable: true })
  exclusaobg_ano: number

  @Column({ type: 'date', nullable: true })
  exclusaobg_data: Date
  
  @Column({ nullable: true })
  exclusaoopm: string
  
  @Column({ type: "int", nullable: true })
  id_adl: number
  
  @Column({ type: "int", nullable: true })
  id_apfd: number
  
  @Column({ type: "int", nullable: true })
  id_cd: number
  
  @Column({ type: "int", nullable: true })
  id_cj: number
  
  @Column({ type: "int", nullable: true })
  id_desercao: number
  
  @Column({ type: "int", nullable: true })
  id_fatd: number
  
  @Column({ type: "int", nullable: true })
  id_ipm: number
  
  @Column({ type: "int", nullable: true })
  id_iso: number
  
  @Column({ type: "int", nullable: true })
  id_it: number
  
  @Column({ type: "int", nullable: true })
  id_sindicancia: number
  
  @Column({ type: "int", nullable: true })
  id_sai: number
  
  @Column({ type: "int", nullable: true })
  id_proc_outros: number
  
  @Column({ type: "int", nullable: true })
  id_punicao: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}