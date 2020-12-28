import { Permission } from 'src/modules/permission/entity/permission.entity';
import { User } from 'src/modules/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) role: string
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date

  @ManyToMany(() => User)
  @JoinTable({
    name: 'users_has_roles',
    joinColumn: {
      name: "role_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "user_id",
      referencedColumnName: "id"
    }
  })
  user: User[];

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'roles_has_permissions',
    joinColumn: {
      name: "role_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "permission_id",
      referencedColumnName: "id"
    }
  })
  permission: Permission[];
}