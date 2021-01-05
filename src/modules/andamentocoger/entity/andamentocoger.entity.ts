import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('andamentoscoger')
export class Andamentocoger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  andamentocoger: string;

  @Column({ nullable: true })
  procedimento: string;
}
