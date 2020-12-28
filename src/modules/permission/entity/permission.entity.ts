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
import { Role } from '../../role/entity/role.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) permission: string
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date

  @ManyToMany(() => Role, role => role.role, {cascade: true})
  @JoinTable({
    name: 'roles_has_permissions',
    joinColumn: {
      name: "permission_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "role_id",
      referencedColumnName: "id"
    }
  })
  roles: Role[];
}