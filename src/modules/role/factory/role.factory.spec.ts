// import { Test, TestingModule } from '@nestjs/testing';
import { CreateRoleDto } from '../dtos/create.dto';
import { fakerRegistry } from './role.factory';

describe('roleFactory', () => {
  it('should create a factory and return it', async () => {
    const role: CreateRoleDto = fakerRegistry();

    expect(role).toBe(role);
  });
});
