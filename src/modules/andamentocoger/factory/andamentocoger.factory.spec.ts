// import { Test, TestingModule } from '@nestjs/testing';
import { CreateAndamentocogerDto } from '../dtos';
import { fakerRegistry } from './andamentocoger.factory';

describe('AndamentocogerFactory', () => {
  it('should create a factory and return it', async () => {
    const Andamentocoger: CreateAndamentocogerDto = fakerRegistry();

    expect(Andamentocoger).toBe(Andamentocoger);
  });
});
