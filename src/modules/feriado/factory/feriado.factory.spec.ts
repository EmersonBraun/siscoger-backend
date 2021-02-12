// import { Test, TestingModule } from '@nestjs/testing';
import { CreateFeriadoDto } from '../dtos';
import { fakerRegistry } from './feriado.factory';

describe('FeriadoFactory', () => {
  it('should create a factory and return it', async () => {
    const Feriado: CreateFeriadoDto = fakerRegistry();

    expect(Feriado).toBe(Feriado);
  });
});
