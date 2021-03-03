// import { Test, TestingModule } from '@nestjs/testing';
import { CreateSaiDto } from '../dtos';
import { fakerRegistry } from './sai.factory';

describe('SaiFactory', () => {
  it('should create a factory and return it', async () => {
    const Sai: CreateSaiDto = fakerRegistry();

    expect(Sai).toBe(Sai);
  });
});
