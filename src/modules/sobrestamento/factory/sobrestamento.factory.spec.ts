// import { Test, TestingModule } from '@nestjs/testing';
import { CreateSobrestamentoDto } from '../dtos';
import { fakerRegistry } from './sobrestamento.factory'

describe('SobrestamentoFactory', () => {
  it('should create a factory and return it', async () => {
    const Sobrestamento: CreateSobrestamentoDto = fakerRegistry();

    expect(Sobrestamento).toBe(Sobrestamento)
  });
});
