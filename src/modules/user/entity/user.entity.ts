import bcrypt from 'bcrypt';
import { Role } from 'src/modules/role/entity/role.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;             
  @Column({ nullable: true }) name: string
  @Column({ nullable: true }) rg: string
  @Column({ nullable: true }) cpf: string
  @Column({ nullable: true }) class: string
  @Column({ nullable: true }) position: string
  @Column({ nullable: true }) group: string
  @Column({ nullable: true }) subgroup: string
  @Column({ nullable: true }) opm_code: string
  @Column({ nullable: true }) cdopm: string
  @Column({ nullable: true }) block: boolean
  @Column({ type: 'boolean', nullable: true }) terms: boolean
  @Column() password: string
  @Column() email: string
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date

  @BeforeInsert()  
  async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);  
  }
  
  @ManyToMany(() => Role)
  @JoinTable({
    name: 'users_has_roles',
    joinColumn: {
      name: "user_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "role_id",
        referencedColumnName: "id"
    }
  })
  role: Role[];
}