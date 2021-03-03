// import { Test, TestingModule } from '@nestjs/testing';
import { CreateRestricaoDto } from '../dtos';
import { fakerRegistry } from './restricao.factory';

describe('RestricaoFactory', () => {
  it('should create a factory and return it', async () => {
    const Restricao: CreateRestricaoDto = fakerRegistry();

    expect(Restricao).toBe(Restricao);
  });
});
