// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePermissionDto } from '../dtos/create.dto';
import { fakerRegistry } from './permission.factory';

describe('permissionFactory', () => {
  it('should create a factory and return it', async () => {
    const permission: CreatePermissionDto = fakerRegistry();

    expect(permission).toBe(permission)
  });
});
