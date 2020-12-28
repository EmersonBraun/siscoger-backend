// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePendenciaDto } from '../dtos';
import { fakerRegistry } from './pendencia.factory';

describe('PendenciaFactory', () => {
  it('should create a factory and return it', async () => {
    const Pendencia: CreatePendenciaDto = fakerRegistry();

    expect(Pendencia).toBe(Pendencia)
  });
});
