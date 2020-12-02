// import { Test, TestingModule } from '@nestjs/testing';
import { CreateSindicanciaDto } from '../dtos';
import { fakerRegistry } from './sindicancia.factory'

describe('SindicanciaFactory', () => {
  it('should create a factory and return it', async () => {
    const sindicancia: CreateSindicanciaDto = fakerRegistry();

    expect(sindicancia).toBe(sindicancia)
  });
});
