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
import { Role } from '../../role/entity/role.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) permission: string;
  @Column({ nullable: true }) group?: string;
  @Column({ nullable: true }) description?: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;

  @ManyToMany(() => Role, role => role.permissions)
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
  roles!: Role[];
}
