// import { Test, TestingModule } from '@nestjs/testing';
import { CreateFalecimentoDto } from '../dtos';
import { fakerRegistry } from './falecimento.factory'

describe('FalecimentoFactory', () => {
  it('should create a factory and return it', async () => {
    const Falecimento: CreateFalecimentoDto = fakerRegistry();

    expect(Falecimento).toBe(Falecimento)
  });
});
