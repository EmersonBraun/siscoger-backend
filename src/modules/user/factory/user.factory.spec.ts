// import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../dtos';
import { fakerRegistry } from './user.factory';

describe('userFactory', () => {
  it('should create a factory and return it', async () => {
    const user: CreateUserDto = fakerRegistry();

    expect(user).toBe(user)
  });
});
