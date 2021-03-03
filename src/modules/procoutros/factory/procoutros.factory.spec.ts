// import { Test, TestingModule } from '@nestjs/testing';
import { CreateProcOutrosDto } from '../dtos';
import { fakerRegistry } from './procoutros.factory';

describe('ProcOutrosFactory', () => {
  it('should create a factory and return it', async () => {
    const ProcOutros: CreateProcOutrosDto = fakerRegistry();

    expect(ProcOutros).toBe(ProcOutros);
  });
});
