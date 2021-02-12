// import { Test, TestingModule } from '@nestjs/testing';
import { CreateArquivoDto } from '../dtos';
import { fakerRegistry } from './arquivo.factory';

describe('ArquivoFactory', () => {
  it('should create a factory and return it', async () => {
    const Arquivo: CreateArquivoDto = fakerRegistry();

    expect(Arquivo).toBe(Arquivo);
  });
});
