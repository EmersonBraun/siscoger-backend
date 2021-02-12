import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feriados')
export class Feriado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ nullable: true })
  feriado: string;
}
