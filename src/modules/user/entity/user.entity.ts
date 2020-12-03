import bcrypt from 'bcrypt';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
               
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  rg: string
  @Column({ nullable: true })
  cpf: string
  @Column({ nullable: true })
  class: string
  @Column({ nullable: true })
  position: string
  @Column({ nullable: true })
  group: string
  @Column({ nullable: true })
  subgroup: string
  @Column({ nullable: true })
  opm_code: string
  @Column({ nullable: true })
  cdopm: string
  @Column({ nullable: true })
  block: boolean
  @Column({ type: 'boolean', nullable: true })
  terms: boolean
  @Column()
  password: string
  @Column()
  email: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @BeforeInsert()  
  async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);  
  }
}