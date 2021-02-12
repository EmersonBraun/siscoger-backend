// import { Test, TestingModule } from '@nestjs/testing';
import { CreateMovimentoDto } from '../dtos';
import { fakerRegistry } from './movimento.factory';

describe('MovimentoFactory', () => {
  it('should create a factory and return it', async () => {
    const Movimento: CreateMovimentoDto = fakerRegistry();

    expect(Movimento).toBe(Movimento);
  });
});
