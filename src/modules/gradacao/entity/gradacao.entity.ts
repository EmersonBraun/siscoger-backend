import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gradacoes')
export class Gradacao {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) gradacao: string;
  @Column({ nullable: true }) rel: string;
}
