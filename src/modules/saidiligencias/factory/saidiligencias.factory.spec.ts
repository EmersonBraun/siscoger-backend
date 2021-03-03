// import { Test, TestingModule } from '@nestjs/testing';
import { CreateSaiDiligenciasDto } from '../dtos';
import { fakerRegistry } from './saidiligencias.factory';

describe('saidiligenciasFactory', () => {
  it('should create a factory and return it', async () => {
    const saidiligencias: CreateSaiDiligenciasDto = fakerRegistry();

    expect(saidiligencias).toBe(saidiligencias);
  });
});
