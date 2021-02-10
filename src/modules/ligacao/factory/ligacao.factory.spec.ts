// import { Test, TestingModule } from '@nestjs/testing';
import { CreateLigacaoDto } from '../dtos';
import { fakerRegistry } from './ligacao.factory';

describe('LigacaoFactory', () => {
  it('should create a factory and return it', async () => {
    const Ligacao: CreateLigacaoDto = fakerRegistry();

    expect(Ligacao).toBe(Ligacao);
  });
});
