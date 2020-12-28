import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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
}