// import { Test, TestingModule } from '@nestjs/testing';
import { CreateMotivoconselhoDto } from '../dtos';
import { fakerRegistry } from './motivoconselho.factory'

describe('MotivoconselhoFactory', () => {
  it('should create a factory and return it', async () => {
    const Motivoconselho: CreateMotivoconselhoDto = fakerRegistry();

    expect(Motivoconselho).toBe(Motivoconselho)
  });
});
