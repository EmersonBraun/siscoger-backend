import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('falecimentos')
export class Falecimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  rg: string;

  @Column({ nullable: true })
  cargo: string;

  @Column({ nullable: true })
  nome: string;

  @Column({ type: 'timestamp', nullable: true })
  data: Date;

  @Column({ type: 'int', nullable: true })
  id_municipio: number;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  endereco_numero: string;

  @Column({ nullable: true })
  cdopm: string;

  @Column({ type: 'int', nullable: true })
  bou_ano: number;

  @Column({ nullable: true })
  bou_numero: string;

  @Column({ type: 'int', nullable: true })
  id_situacao: number;

  @Column({ nullable: true })
  resultado: string;

  @Column({ nullable: true })
  descricao_txt: string;
}
