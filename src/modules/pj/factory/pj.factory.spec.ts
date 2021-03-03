// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePjDto } from '../dtos';
import { fakerRegistry } from './pj.factory';

describe('pjFactory', () => {
  it('should create a factory and return it', async () => {
    const pj: CreatePjDto = fakerRegistry();

    expect(pj).toBe(pj);
  });
});
