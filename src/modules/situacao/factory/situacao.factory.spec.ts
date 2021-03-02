// import { Test, TestingModule } from '@nestjs/testing';
import { CreateSituacaoDto } from '../dtos';
import { fakerRegistry } from './situacao.factory';

describe('SituacaoFactory', () => {
  it('should create a factory and return it', async () => {
    const Situacao: CreateSituacaoDto = fakerRegistry();

    expect(Situacao).toBe(Situacao);
  });
});
