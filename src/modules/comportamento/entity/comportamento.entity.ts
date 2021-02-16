import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comportamentos')
export class Comportamento {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) comportamento: string;
}
