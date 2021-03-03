// import { Test, TestingModule } from '@nestjs/testing';
import { CreateReintegradoDto } from '../dtos';
import { fakerRegistry } from './reintegrado.factory';

describe('ReintegradoFactory', () => {
  it('should create a factory and return it', async () => {
    const Reintegrado: CreateReintegradoDto = fakerRegistry();

    expect(Reintegrado).toBe(Reintegrado);
  });
});
