import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../role/entity/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) name: string;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) cpf: string;
  @Column({ nullable: true }) class: string;
  @Column({ nullable: true }) position: string;
  @Column({ nullable: true }) group: string;
  @Column({ nullable: true }) subgroup: string;
  @Column({ nullable: true }) opm_code: string;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) block: boolean;
  @Column({ type: 'boolean', nullable: true }) terms: boolean;
  @Column() password: string;
  @Column() email: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;

  // @AfterLoad()
  // private loadTempPassword(): void {
  //   this.tempPassword = this.password;
  // }

  // @BeforeUpdate()
  // @BeforeInsert()
  // async hashPassword(): Promise<void> {
  //   if (this.password) {
  //     this.password = await bcrypt.hash(this.password, 10);
  //   }
  // }

  @ManyToMany(() => Role, role => role.users)
  @JoinTable()
  @JoinTable({
    name: 'users_has_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles!: Role[];
}
