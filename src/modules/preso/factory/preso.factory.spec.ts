// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePresoDto } from '../dtos';
import { fakerRegistry } from './preso.factory';

describe('presoFactory', () => {
  it('should create a factory and return it', async () => {
    const preso: CreatePresoDto = fakerRegistry();

    expect(preso).toBe(preso);
  });
});
