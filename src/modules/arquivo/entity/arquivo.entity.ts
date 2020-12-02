import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('arquivos')
export class Arquivo {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({nullable: true})
  local_atual: string
  
  @Column({nullable: true})
  obs: string
  
  @Column({nullable: true})
  numero: string
  
  @Column({nullable: true})
  letra: string
  
  @Column({type: 'int', nullable: true})
  id_ipm: number
  
  @Column({type: 'int', nullable: true})
  id_cj: number
  
  @Column({type: 'int', nullable: true})
  id_cd: number
  
  @Column({type: 'int', nullable: true})
  id_adl: number
  
  @Column({type: 'int', nullable: true})
  id_sindicancia: number
  
  @Column({type: 'int', nullable: true})
  id_fatd: number
  
  @Column({type: 'int', nullable: true})
  id_desercao: number
  
  @Column({type: 'int', nullable: true})
  id_apfd: number
  
  @Column({type: 'int', nullable: true})
  id_iso: number
  
  @Column({type: 'int', nullable: true})
  id_it: number
  
  @Column({type: 'int', nullable: true})
  id_sai: number
  
  @Column({type: 'int', nullable: true})
  id_pad: number
  
  @Column({type: 'int', nullable: true})
  id_proc_outros: number
  
  @Column({type: 'int', nullable: true})
  id_punicao: number
  
  @Column({nullable: true})
  rg: string
  
  @Column({nullable: true})
  nome: string
  
  @Column({nullable: true})
  opm: string
  
  @Column({nullable: true})
  arquivo_data: Date
  
  @Column({type: 'date' ,nullable: true})
  retorno_data: Date
  
  @Column({nullable: true})
  procedimento: string
  
  @Column({nullable: true})
  sjd_ref: string

  @Column({nullable: true})
  sjd_ref_ano: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}