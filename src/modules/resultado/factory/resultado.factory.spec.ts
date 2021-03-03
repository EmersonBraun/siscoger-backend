// import { Test, TestingModule } from '@nestjs/testing';
import { CreateResultadoDto } from '../dtos';
import { fakerRegistry } from './resultado.factory';

describe('resultadoFactory', () => {
  it('should create a factory and return it', async () => {
    const resultado: CreateResultadoDto = fakerRegistry();

    expect(resultado).toBe(resultado);
  });
});
