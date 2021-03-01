// import { Test, TestingModule } from '@nestjs/testing';
import { CreateCjDto } from '../dtos';
import { fakerRegistry } from './cj.factory';

describe('CjFactory', () => {
  it('should create a factory and return it', async () => {
    const cjVariable: CreateCjDto = fakerRegistry();

    expect(cjVariable).toBe(cjVariable);
  });
});
