import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motivoconselhos')
export class Motivoconselho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  motivoconselho: string;
}
