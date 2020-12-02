// import { Test, TestingModule } from '@nestjs/testing';
import { CreateOfendidoDto } from '../dtos';
import { fakerRegistry } from './ofendido.factory'

describe('OfendidoFactory', () => {
  it('should create a factory and return it', async () => {
    const Ofendido: CreateOfendidoDto = fakerRegistry();

    expect(Ofendido).toBe(Ofendido)
  });
});
