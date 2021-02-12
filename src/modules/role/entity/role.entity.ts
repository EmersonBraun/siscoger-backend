import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Permission } from '../../permission/entity/permission.entity';
import { User } from '../../user/entity/user.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn() id: number;

  @Column({ nullable: true }) role: string;

  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;

  @ManyToMany(() => User, user => user.roles, { cascade: true })
  // @JoinTable({
  //   name: 'users_has_roles',
  //   joinColumn: {
  //     name: "user_id",
  //     referencedColumnName: "id"
  //   },
  //   inverseJoinColumn: {
  //     name: "role_id",
  //     referencedColumnName: "id"
  //   }
  // })
  users!: User[];

  @ManyToMany(() => Permission, permission => permission.roles, {
    cascade: true,
  })
  @JoinTable({
    name: 'roles_has_permissions',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  permissions!: Permission[];
}
