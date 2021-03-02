// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePresoTipoDto } from '../dtos';
import { fakerRegistry } from './presotipo.factory';

describe('PresoTipoFactory', () => {
  it('should create a factory and return it', async () => {
    const PresoTipo: CreatePresoTipoDto = fakerRegistry();

    expect(PresoTipo).toBe(PresoTipo);
  });
});
