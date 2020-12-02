import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('andamentos')
export class Andamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  andamento: string
  
  @Column({ nullable: true })
  procedimento: string
}