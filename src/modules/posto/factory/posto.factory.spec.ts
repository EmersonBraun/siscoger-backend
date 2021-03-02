// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePostoDto } from '../dtos';
import { fakerRegistry } from './posto.factory';

describe('PostoFactory', () => {
  it('should create a factory and return it', async () => {
    const Posto: CreatePostoDto = fakerRegistry();

    expect(Posto).toBe(Posto);
  });
});
