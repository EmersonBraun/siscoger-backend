// import { Test, TestingModule } from '@nestjs/testing';
import { CreateEnvolvidoDto } from '../dtos';
import { fakerRegistry } from './envolvido.factory';

describe('EnvolvidoFactory', () => {
  it('should create a factory and return it', async () => {
    const Envolvido: CreateEnvolvidoDto = fakerRegistry();

    expect(Envolvido).toBe(Envolvido);
  });
});
