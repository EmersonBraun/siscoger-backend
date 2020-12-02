// import { Test, TestingModule } from '@nestjs/testing';
import { CreateGradacaoDto } from '../dtos';
import { fakerRegistry } from './gradacao.factory'

describe('GradacaoFactory', () => {
  it('should create a factory and return it', async () => {
    const Gradacao: CreateGradacaoDto = fakerRegistry();

    expect(Gradacao).toBe(Gradacao)
  });
});
