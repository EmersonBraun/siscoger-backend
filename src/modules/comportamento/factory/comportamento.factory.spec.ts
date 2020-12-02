// import { Test, TestingModule } from '@nestjs/testing';
import { CreateComportamentoDto } from '../dtos';
import { fakerRegistry } from './comportamento.factory'

describe('ComportamentoFactory', () => {
  it('should create a factory and return it', async () => {
    const Comportamento: CreateComportamentoDto = fakerRegistry();

    expect(Comportamento).toBe(Comportamento)
  });
});
