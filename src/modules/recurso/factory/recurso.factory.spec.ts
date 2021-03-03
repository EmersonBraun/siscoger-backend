// import { Test, TestingModule } from '@nestjs/testing';
import { CreateRecursoDto } from '../dtos';
import { fakerRegistry } from './recurso.factory';

describe('RecursoFactory', () => {
  it('should create a factory and return it', async () => {
    const Recurso: CreateRecursoDto = fakerRegistry();

    expect(Recurso).toBe(Recurso);
  });
});
